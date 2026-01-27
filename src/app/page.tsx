import { Box, Container, Grid, Text, Flex, Card } from "@radix-ui/themes";
import { PageBanner } from "@/components/layout";

// Placeholder data
const newsItems = [
  { id: 1, title: "Hội nghị tổng kết công tác năm 2024", date: "27/01/2026", category: "Tin tức" },
  { id: 2, title: "Chương trình hành động thực hiện Nghị quyết", date: "26/01/2026", category: "Tin tức" },
  { id: 3, title: "Kế hoạch phát triển kinh tế - xã hội năm 2026", date: "25/01/2026", category: "Kinh tế" },
];

const quickLinks = [
  { icon: "📋", label: "Dịch vụ công QG", href: "#" },
  { icon: "📅", label: "Lịch tiếp dân", href: "#" },
  { icon: "📞", label: "Đường dây nóng", href: "#" },
  { icon: "📊", label: "Thống kê", href: "#" },
];

export default function Home() {
  return (
    <Box>
      {/* Page Banner */}
      <PageBanner />

      {/* Quick Links Section */}
      <Box py="6" style={{ background: "var(--background-secondary)" }}>
        <Container size="4">
          <Grid columns={{ initial: "2", md: "4" }} gap="4">
            {quickLinks.map((link, index) => (
              <Card key={index} style={{ textAlign: "center", padding: "var(--spacing-6)" }}>
                <Text size="6" style={{ display: "block", marginBottom: 8 }}>
                  {link.icon}
                </Text>
                <Text
                  size="2"
                  weight="medium"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {link.label}
                </Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* News Section */}
      <Box py="8">
        <Container size="4">
          <Grid columns={{ initial: "1", md: "3" }} gap="6">
            {/* News Column 1 */}
            <Box>
              <Flex
                align="center"
                gap="2"
                mb="4"
                style={{ borderBottom: "2px solid var(--primary-brand)", paddingBottom: 8 }}
              >
                <Box
                  style={{
                    width: 4,
                    height: 20,
                    background: "var(--primary-brand)",
                    borderRadius: 2,
                  }}
                />
                <Text
                  size="4"
                  weight="bold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--primary-brand)" }}
                >
                  TIN TỨC TỔNG HỢP
                </Text>
              </Flex>

              <Flex direction="column" gap="4">
                {newsItems.map((item) => (
                  <Card key={item.id} className="card">
                    <Box
                      style={{
                        height: 180,
                        background: "var(--gray-200)",
                        borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                        marginBottom: 12,
                      }}
                    />
                    <Box p="3">
                      <Text
                        size="3"
                        weight="medium"
                        className="line-clamp-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        size="1"
                        style={{
                          color: "var(--gray-500)",
                          fontFamily: "var(--font-sans)",
                          marginTop: 8,
                          display: "block",
                        }}
                      >
                        {item.date}
                      </Text>
                    </Box>
                  </Card>
                ))}
              </Flex>
            </Box>

            {/* News Column 2 */}
            <Box>
              <Flex
                align="center"
                gap="2"
                mb="4"
                style={{ borderBottom: "2px solid var(--secondary-500)", paddingBottom: 8 }}
              >
                <Box
                  style={{
                    width: 4,
                    height: 20,
                    background: "var(--secondary-500)",
                    borderRadius: 2,
                  }}
                />
                <Text
                  size="4"
                  weight="bold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--secondary-500)" }}
                >
                  KINH TẾ - CHÍNH TRỊ
                </Text>
              </Flex>

              <Flex direction="column" gap="3">
                {newsItems.map((item) => (
                  <Flex key={item.id} gap="3" align="start">
                    <Box
                      style={{
                        width: 80,
                        height: 60,
                        background: "var(--gray-200)",
                        borderRadius: "var(--radius-md)",
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Text
                        size="2"
                        className="line-clamp-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        size="1"
                        style={{
                          color: "var(--gray-500)",
                          fontFamily: "var(--font-sans)",
                          marginTop: 4,
                        }}
                      >
                        {item.date}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </Box>

            {/* News Column 3 */}
            <Box>
              <Flex
                align="center"
                gap="2"
                mb="4"
                style={{ borderBottom: "2px solid var(--green-500)", paddingBottom: 8 }}
              >
                <Box
                  style={{
                    width: 4,
                    height: 20,
                    background: "var(--green-500)",
                    borderRadius: 2,
                  }}
                />
                <Text
                  size="4"
                  weight="bold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--green-500)" }}
                >
                  VĂN HÓA - XÃ HỘI
                </Text>
              </Flex>

              <Flex direction="column" gap="3">
                {newsItems.map((item) => (
                  <Flex key={item.id} gap="3" align="start">
                    <Box
                      style={{
                        width: 80,
                        height: 60,
                        background: "var(--gray-200)",
                        borderRadius: "var(--radius-md)",
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Text
                        size="2"
                        className="line-clamp-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        size="1"
                        style={{
                          color: "var(--gray-500)",
                          fontFamily: "var(--font-sans)",
                          marginTop: 4,
                        }}
                      >
                        {item.date}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Procedures Section */}
      <Box py="8" style={{ background: "var(--background-secondary)" }}>
        <Container size="4">
          <Flex
            align="center"
            gap="2"
            mb="4"
            style={{ borderBottom: "2px solid var(--primary-brand)", paddingBottom: 8 }}
          >
            <Box
              style={{
                width: 4,
                height: 20,
                background: "var(--primary-brand)",
                borderRadius: 2,
              }}
            />
            <Text
              size="4"
              weight="bold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--primary-brand)" }}
            >
              HƯỚNG DẪN THỦ TỤC HÀNH CHÍNH
            </Text>
          </Flex>

          <Card>
            {/* Tabs */}
            <Flex gap="0" style={{ borderBottom: "1px solid var(--gray-200)" }}>
              {["CÔNG DÂN", "DOANH NGHIỆP", "ĐẦU TƯ NƯỚC NGOÀI"].map((tab, index) => (
                <Box
                  key={tab}
                  style={{
                    padding: "12px 24px",
                    background: index === 0 ? "var(--primary-brand)" : "transparent",
                    color: index === 0 ? "white" : "var(--gray-700)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {tab}
                </Box>
              ))}
            </Flex>

            {/* Procedure list */}
            <Box p="4">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "var(--gray-50)" }}>
                    <th style={{ padding: 12, textAlign: "left", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>STT</th>
                    <th style={{ padding: 12, textAlign: "left", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>Tên thủ tục</th>
                    <th style={{ padding: 12, textAlign: "left", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>Lĩnh vực</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--gray-100)" }}>
                      <td style={{ padding: 12, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>{i}</td>
                      <td style={{ padding: 12, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--secondary-600)" }}>
                        Thủ tục đăng ký khai sinh
                      </td>
                      <td style={{ padding: 12, fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--gray-500)" }}>
                        Hộ tịch
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
