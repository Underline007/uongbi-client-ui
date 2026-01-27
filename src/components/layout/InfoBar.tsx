"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Mail, Cloud } from "lucide-react";

const PROVINCES = [
  "Hà Nội", "Hồ Chí Minh", "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định",
  "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên",
  "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình",
  "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định",
  "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
  "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang",
  "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
].sort();

export function InfoBar() {
  const [selectedCity, setSelectedCity] = useState("Quảng Ninh");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProvinces = PROVINCES.filter(province =>
    province.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white text-gray-900 shadow-sm pt-4" style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center h-12 gap-1 sm:gap-2 md:gap-4">
          {/* News Ticker Section */}
          <div className="flex-1 flex items-center bg-gray-100 rounded-md h-full">
            <div className="hidden md:flex items-center px-2 md:px-4 py-2 flex-shrink-0">
              <span className="font-bold text-xs md:text-sm uppercase tracking-wide">TIN MỚI</span>
            </div>
            <div className="flex-1 overflow-hidden relative flex items-center px-2 md:px-4 py-2">
              <Link 
                className="absolute w-full flex items-center px-1 md:px-4 group" 
                href="/articles/94692871-ddb2-454f-9c83-c55664095ea3"
              >
                <span className="text-red-600 mr-1 md:mr-2 text-xs md:text-sm font-medium">■</span>
                <span className="text-xs md:text-sm font-medium truncate group-hover:text-red-600 transition-colors">
                  Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335
                </span>
              </Link>
            </div>
            <div className="hidden md:flex flex-row gap-2 px-2">
              <button className="hover:opacity-70 transition-opacity p-1.5 bg-white rounded-full shadow-sm" aria-label="Previous news">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.625 11.5L10 7.75L13.375 11.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button className="hover:opacity-70 transition-opacity p-1.5 bg-white rounded-full shadow-sm" aria-label="Next news">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.625 8.5L10 12.25L13.375 8.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Feedback Link */}
          <Link 
            className="flex items-center md:bg-gray-100 rounded-md md:px-4 px-2 h-12 flex-shrink-0 gap-2 cursor-pointer md:hover:bg-gray-50" 
            href="/lien-he"
          >
            <Mail className="h-5 w-5 text-gray-500" />
            <span className="hidden md:inline text-sm font-medium text-gray-700 whitespace-nowrap">Hòm thư góp ý</span>
          </Link>

          {/* Weather Widget */}
          <div className="relative weather-widget hidden md:block" ref={dropdownRef}>
            <div 
              className="flex items-center bg-gray-100 rounded-md px-4 h-12 flex-shrink-0 gap-2 cursor-pointer hover:bg-gray-50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">{selectedCity}</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">21°C</span>
                  <Cloud className="h-5 w-5 text-gray-500" />
                </div>
              </div>
              <svg 
                width="11" 
                height="6" 
                viewBox="0 0 11 6" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path 
                  opacity="0.6" 
                  d="M10.9619 0.308655C10.9241 0.217292 10.86 0.139204 10.7778 0.0842643C10.6956 0.0293243 10.5989 5.83729e-08 10.5 0H0.500002C0.40111 -3.89443e-07 0.304439 0.0293245 0.222214 0.0842662C0.139988 0.139208 0.0759017 0.217299 0.0380584 0.308663C0.000215113 0.400028 -0.00968527 0.500563 0.00960935 0.597554C0.028904 0.694545 0.0765271 0.783637 0.146456 0.853562L5.14645 5.85355C5.19288 5.89998 5.248 5.93681 5.30866 5.96194C5.36932 5.98707 5.43434 6 5.5 6C5.56566 6 5.63068 5.98707 5.69134 5.96194C5.752 5.93681 5.80712 5.89998 5.85355 5.85355L10.8535 0.853562C10.9235 0.783636 10.9711 0.694543 10.9904 0.59755C11.0097 0.500557 10.9998 0.400021 10.9619 0.308655Z" 
                  fill="#AAAAAA"
                ></path>
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-60 bg-white shadow-lg rounded-md border border-gray-100 overflow-hidden z-50">
                <div className="p-2 border-b border-gray-100">
                  <input
                    type="text"
                    placeholder="Nhập tên tỉnh thành..."
                    className="w-full text-sm px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-blue-500 text-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredProvinces.map((province) => (
                    <div
                      key={province}
                      className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-gray-50 hover:text-blue-600 ${selectedCity === province ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700'}`}
                      onClick={() => {
                        setSelectedCity(province);
                        setIsDropdownOpen(false);
                        setSearchQuery("");
                      }}
                    >
                      {province}
                    </div>
                  ))}
                  {filteredProvinces.length === 0 && (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      Không tìm thấy kết quả
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
