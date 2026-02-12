"use client";

import { useState } from "react";
import {
    Send, Loader2, CheckCircle2, AlertCircle,
    FileText, ChevronLeft, Star,
} from "lucide-react";
import { trackContactFormSubmit } from "@/lib/analytics";
import { useFeedbackForms, useFeedbackForm, useSubmitForm } from "@/hooks/api/use-feedback";
import type { SubmitFormRequest, FeedbackFormSummary, FeedbackFormField } from "@/types/api";

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";

// --- Rating Field ---
function RatingField({
    field,
    value,
    onChange,
    disabled,
}: {
    field: FeedbackFormField;
    value: number;
    onChange: (name: string, value: string) => void;
    disabled: boolean;
}) {
    const max = field.validation?.max ?? 5;
    const min = field.validation?.min ?? 1;
    const [hovered, setHovered] = useState(0);

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((star) => (
                <button
                    key={star}
                    type="button"
                    disabled={disabled}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => onChange(field.field_id, String(star))}
                    className="p-0.5 disabled:opacity-50 transition-colors"
                >
                    <Star
                        className={`w-7 h-7 ${(hovered || value) >= star
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                            }`}
                    />
                </button>
            ))}
            {value > 0 && (
                <span className="ml-2 text-sm text-gray-500">{value}/{max}</span>
            )}
        </div>
    );
}

// --- Dynamic Field Renderer ---
function DynamicField({
    field,
    value,
    checkboxValues,
    onChange,
    onCheckboxChange,
    disabled,
}: {
    field: FeedbackFormField;
    value: string;
    checkboxValues: string[];
    onChange: (name: string, value: string) => void;
    onCheckboxChange: (name: string, option: string, checked: boolean) => void;
    disabled: boolean;
}) {
    const baseClass = "w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:opacity-50 disabled:bg-gray-50 text-sm";
    const options = field.validation?.options ?? [];

    switch (field.type) {
        case "textarea":
            return (
                <textarea
                    id={field.field_id}
                    rows={5}
                    required={field.required}
                    value={value}
                    onChange={(e) => onChange(field.field_id, e.target.value)}
                    disabled={disabled}
                    placeholder={field.placeholder || ""}
                    maxLength={field.validation?.max_length ?? undefined}
                    className={baseClass}
                />
            );

        case "select":
            return (
                <select
                    id={field.field_id}
                    required={field.required}
                    value={value}
                    onChange={(e) => onChange(field.field_id, e.target.value)}
                    disabled={disabled}
                    className={baseClass}
                >
                    <option value="">-- Chọn --</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            );

        case "radio":
            return (
                <div className="space-y-2">
                    {options.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name={field.field_id}
                                value={opt}
                                checked={value === opt}
                                onChange={(e) => onChange(field.field_id, e.target.value)}
                                disabled={disabled}
                                className="text-red-600 focus:ring-red-500"
                            />
                            <span className="text-sm text-gray-700">{opt}</span>
                        </label>
                    ))}
                </div>
            );

        case "checkbox":
            return (
                <div className="space-y-2">
                    {options.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={checkboxValues.includes(opt)}
                                onChange={(e) => onCheckboxChange(field.field_id, opt, e.target.checked)}
                                disabled={disabled}
                                className="text-red-600 focus:ring-red-500"
                            />
                            <span className="text-sm text-gray-700">{opt}</span>
                        </label>
                    ))}
                </div>
            );

        case "rating":
            return (
                <RatingField
                    field={field}
                    value={Number(value) || 0}
                    onChange={onChange}
                    disabled={disabled}
                />
            );

        default: {
            const inputType =
                field.type === "email" ? "email" :
                    field.type === "phone" ? "tel" :
                        field.type === "number" ? "number" :
                            field.type === "date" ? "date" : "text";
            return (
                <input
                    type={inputType}
                    id={field.field_id}
                    required={field.required}
                    value={value}
                    onChange={(e) => onChange(field.field_id, e.target.value)}
                    disabled={disabled}
                    placeholder={field.placeholder || ""}
                    maxLength={field.validation?.max_length ?? undefined}
                    className={baseClass}
                />
            );
        }
    }
}

// --- Main Component ---
export function ContactForm() {
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
    const [checkboxValues, setCheckboxValues] = useState<Record<string, string[]>>({});
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // 1) Fetch list of forms
    const { data: formsList, isLoading: formsLoading } = useFeedbackForms();
    const forms = (formsList ?? []) as FeedbackFormSummary[];

    // 2) Fetch selected form detail
    const { data: formDetail, isLoading: formDetailLoading } = useFeedbackForm(selectedSlug ?? "");

    // 3) Submit mutation
    const submitMutation = useSubmitForm(formDetail?.id ?? "");

    const isDisabled = status === "submitting";

    const handleFieldChange = (name: string, value: string) => {
        setFieldValues((prev) => ({ ...prev, [name]: value }));
        if (status === "error" || status === "rate_limited") setStatus("idle");
    };

    const handleCheckboxChange = (name: string, option: string, checked: boolean) => {
        setCheckboxValues((prev) => {
            const current = prev[name] ?? [];
            const updated = checked
                ? [...current, option]
                : current.filter((v) => v !== option);
            return { ...prev, [name]: updated };
        });
        if (status === "error" || status === "rate_limited") setStatus("idle");
    };

    const handleSelectForm = (slug: string) => {
        setSelectedSlug(slug);
        setFieldValues({});
        setCheckboxValues({});
        setStatus("idle");
        setErrorMessage("");
    };

    const handleBack = () => {
        setSelectedSlug(null);
        setFieldValues({});
        setCheckboxValues({});
        setStatus("idle");
        setErrorMessage("");
    };

    // Validation: all required fields must have values
    const sortedFields = formDetail?.fields
        ? [...formDetail.fields].sort((a, b) => a.order - b.order)
        : [];

    const isValid = sortedFields
        .filter((f) => f.required)
        .every((f) => {
            if (f.type === "checkbox") {
                return (checkboxValues[f.field_id] ?? []).length > 0;
            }
            return (fieldValues[f.field_id] ?? "").trim().length > 0;
        });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid || !formDetail) return;

        trackContactFormSubmit(formDetail.title);

        setStatus("submitting");
        setErrorMessage("");

        // Build data: merge field values and checkbox values
        const data: Record<string, unknown> = { ...fieldValues };
        for (const [key, vals] of Object.entries(checkboxValues)) {
            data[key] = vals;
        }

        // Extract submitter info from known field_ids
        const payload: SubmitFormRequest = {
            data,
            submitter_name: (fieldValues["name"] ?? "").trim() || undefined,
            submitter_email: (fieldValues["email"] ?? "").trim() || undefined,
            submitter_phone: (fieldValues["phone"] ?? "").trim() || undefined,
            is_anonymous: formDetail.settings?.allow_anonymous && !fieldValues["name"],
        };

        try {
            await submitMutation.mutateAsync(payload);
            setStatus("success");
        } catch (err: unknown) {
            const error = err as { response?: { status?: number; data?: { detail?: string; retry_after?: number } } };
            if (error?.response?.status === 429) {
                const retryAfter = error.response.data?.retry_after ?? 60;
                setStatus("rate_limited");
                setErrorMessage(
                    error.response.data?.detail
                    || `Bạn đã gửi quá nhiều lần. Vui lòng chờ ${retryAfter} giây rồi thử lại.`
                );
            } else {
                setStatus("error");
                setErrorMessage("Gửi thất bại. Vui lòng thử lại sau.");
            }
        }
    };

    // --- SUCCESS STATE ---
    if (status === "success") {
        const successMessage = formDetail?.settings?.success_message
            || "Cảm ơn bạn đã gửi ý kiến. Chúng tôi sẽ xem xét và phản hồi trong thời gian sớm nhất.";

        return (
            <div className="lg:col-span-2">
                <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 shadow-sm">
                    <div className="text-center py-12">
                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Gửi thành công!</h2>
                        <p className="text-gray-600 mb-6">{successMessage}</p>
                        <div className="flex gap-3 justify-center">
                            <button
                                type="button"
                                onClick={() => {
                                    setFieldValues({});
                                    setCheckboxValues({});
                                    setStatus("idle");
                                }}
                                className="px-5 py-2 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                            >
                                Gửi lại form này
                            </button>
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-5 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                            >
                                Chọn form khác
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- STEP 1: FORM SELECTION ---
    if (!selectedSlug) {
        return (
            <div className="lg:col-span-2">
                <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 shadow-sm">
                    <div className="mb-8 pb-4 border-b border-red-600">
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Hòm thư góp ý</h2>
                        <p className="text-gray-600">
                            Vui lòng chọn loại biểu mẫu phù hợp với nội dung góp ý của bạn
                        </p>
                    </div>

                    {formsLoading ? (
                        <div className="flex items-center justify-center py-12 text-gray-500">
                            <Loader2 className="w-6 h-6 animate-spin mr-2" />
                            Đang tải danh sách biểu mẫu...
                        </div>
                    ) : forms.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                            <p>Hiện chưa có biểu mẫu nào. Vui lòng quay lại sau.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {forms.map((form) => (
                                <button
                                    key={form.id}
                                    type="button"
                                    onClick={() => handleSelectForm(form.slug)}
                                    className="w-full text-left p-5 border border-gray-200 hover:border-red-300 hover:bg-red-50/30 transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-10 h-10 bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                            <FileText className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                                {form.title}
                                            </h3>
                                            {form.description && (
                                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                    {form.description}
                                                </p>
                                            )}
                                        </div>
                                        <ChevronLeft className="w-5 h-5 text-gray-300 rotate-180 shrink-0 mt-2 group-hover:text-red-500 transition-colors" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // --- STEP 2: FORM DETAIL + FILL ---
    return (
        <div className="lg:col-span-2">
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 shadow-sm">
                {/* Header with back button */}
                <div className="mb-8 pb-4 border-b border-red-600">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors mb-3"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Quay lại danh sách
                    </button>
                    <h2 className="text-2xl font-bold text-red-600 mb-1">
                        {formDetail?.title || "Đang tải..."}
                    </h2>
                    {formDetail?.description && (
                        <p className="text-gray-600 text-sm">{formDetail.description}</p>
                    )}
                </div>

                {/* Error / Rate limit */}
                {(status === "error" || status === "rate_limited") && (
                    <div className={`mb-6 p-4 flex items-start gap-3 ${status === "rate_limited" ? "bg-amber-50 border border-amber-200" : "bg-red-50 border border-red-200"}`}>
                        <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${status === "rate_limited" ? "text-amber-500" : "text-red-500"}`} />
                        <p className={`text-sm ${status === "rate_limited" ? "text-amber-700" : "text-red-700"}`}>
                            {errorMessage}
                        </p>
                    </div>
                )}

                {formDetailLoading ? (
                    <div className="flex items-center justify-center py-12 text-gray-500">
                        <Loader2 className="w-6 h-6 animate-spin mr-2" />
                        Đang tải biểu mẫu...
                    </div>
                ) : !formDetail ? (
                    <div className="text-center py-12 text-gray-500">
                        <p>Không thể tải biểu mẫu. Vui lòng thử lại.</p>
                    </div>
                ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* All fields rendered dynamically from API */}
                        {sortedFields.map((field) => (
                            <div key={field.field_id}>
                                <label htmlFor={field.field_id} className="block text-sm font-medium text-gray-700 mb-1">
                                    {field.label}{field.required ? " *" : ""}
                                </label>
                                <DynamicField
                                    field={field}
                                    value={fieldValues[field.field_id] ?? ""}
                                    checkboxValues={checkboxValues[field.field_id] ?? []}
                                    onChange={handleFieldChange}
                                    onCheckboxChange={handleCheckboxChange}
                                    disabled={isDisabled}
                                />
                                {field.help_text && (
                                    <p className="mt-1 text-xs text-gray-400">{field.help_text}</p>
                                )}
                            </div>
                        ))}

                        {/* Submit */}
                        <div className="flex justify-center pt-8 border-t border-gray-200 mt-8">
                            <button
                                type="submit"
                                disabled={!isValid || isDisabled}
                                className="w-full px-8 py-4 bg-red-600 text-white text-lg font-bold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                            >
                                {isDisabled ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Đang gửi...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Gửi
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
