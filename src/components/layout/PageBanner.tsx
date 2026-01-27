import { Box, Container, Text, Flex } from "@radix-ui/themes";

interface PageBannerProps {
    title?: string;
    subtitle?: string;
}

export function PageBanner({
    title = "HƯỚNG TỚI ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC",
    subtitle = "LẦN THỨ XIV CỦA ĐẢNG"
}: PageBannerProps) {
    return (
        <Box
            py="6"
            style={{
                background: "linear-gradient(135deg, var(--primary-brand) 0%, #c41e1e 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative elements */}
            <Box
                style={{
                    position: "absolute",
                    left: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: 0.3,
                }}
            >
                {/* Star decoration placeholder */}
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path
                        d="M40 0L49.5 30.5H80L55.2 49.4L64.7 80L40 61.1L15.3 80L24.8 49.4L0 30.5H30.5L40 0Z"
                        fill="rgba(255,215,0,0.8)"
                    />
                </svg>
            </Box>

            <Container size="4">
                <Flex justify="center" align="center" gap="4">
                    {/* Star icon */}
                    <Box style={{ color: "#FFD700" }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                            <path d="M20 0L24.7 15.3H40L27.6 24.7L32.4 40L20 30.6L7.6 40L12.4 24.7L0 15.3H15.3L20 0Z" />
                        </svg>
                    </Box>

                    {/* Title text */}
                    <Box style={{ textAlign: "center" }}>
                        <Text
                            size="5"
                            weight="bold"
                            style={{
                                color: "#FFD700",
                                fontFamily: "var(--font-serif)",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            {title}
                        </Text>
                        <Text
                            size="6"
                            weight="bold"
                            style={{
                                color: "white",
                                fontFamily: "var(--font-serif)",
                                textTransform: "uppercase",
                                display: "block",
                                marginTop: 4,
                            }}
                        >
                            {subtitle}
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
