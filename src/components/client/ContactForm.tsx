"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log("Form submitted:", formData);
    };

    const characterCount = formData.message.length;

    return (
        <div className="lg:col-span-2">
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 shadow-sm">
                {/* Header */}
                <div className="mb-8 pb-4 border-b border-red-600">
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Hòm thư góp ý</h2>
                    <p className="text-gray-600">
                        Ý kiến đóng góp của bạn là nguồn động viên to lớn giúp chúng tôi hoàn thiện và phục vụ bạn tốt hơn
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Contact Info Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin liên hệ</h3>

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Họ và tên *
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-2 border focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                                    placeholder="Nhập họ và tên đầy đủ"
                                />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-2 border focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                                        placeholder="example@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Số điện thoại *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-2 border focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                                        placeholder="0xxx xxx xxx"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Content Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Nội dung góp ý</h3>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Chủ đề *
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                            >
                                <option value="">Chọn chủ đề góp ý</option>
                                <option value="Góp ý về dịch vụ hành chính">Góp ý về dịch vụ hành chính</option>
                                <option value="Góp ý về website">Góp ý về website</option>
                                <option value="Góp ý về cán bộ công chức">Góp ý về cán bộ công chức</option>
                                <option value="Khiếu nại">Khiếu nại</option>
                                <option value="Khen ngợi">Khen ngợi</option>
                                <option value="Đề xuất cải tiến">Đề xuất cải tiến</option>
                                <option value="Khác">Khác</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Nội dung chi tiết *
                            </label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                    <MessageSquare className="h-5 w-5 text-gray-400" />
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-2 border focus:ring-2 focus:ring-red-500 focus:border-red-500 border-gray-300"
                                    placeholder="Nhập nội dung góp ý của bạn. Vui lòng mô tả chi tiết để chúng tôi có thể hỗ trợ bạn tốt hơn..."
                                />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                {characterCount} ký tự (tối thiểu 10 ký tự)
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8 border-t border-gray-200 mt-8">
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-red-600 text-white text-lg font-bold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                        >
                            <Send className="w-4 h-4 mr-2" />
                            Gửi góp ý
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
