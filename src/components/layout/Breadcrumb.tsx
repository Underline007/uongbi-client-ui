import { Flex, Link, Text } from "@radix-ui/themes";
import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <Flex
            align="center"
            gap="1"
            py="3"
            style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
            }}
        >
            {/* Home link */}
            <Link asChild>
                <NextLink
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "var(--gray-500)",
                        textDecoration: "none",
                    }}
                >
                    <HomeIcon width={16} height={16} />
                </NextLink>
            </Link>

            {items.map((item, index) => (
                <Flex key={index} align="center" gap="1">
                    <ChevronRightIcon
                        width={14}
                        height={14}
                        style={{ color: "var(--gray-400)" }}
                    />
                    {item.href ? (
                        <Link asChild>
                            <NextLink
                                href={item.href}
                                style={{
                                    color: "var(--gray-600)",
                                    textDecoration: "none",
                                }}
                            >
                                {item.label}
                            </NextLink>
                        </Link>
                    ) : (
                        <Text style={{ color: "var(--gray-800)" }}>
                            {item.label}
                        </Text>
                    )}
                </Flex>
            ))}
        </Flex>
    );
}
