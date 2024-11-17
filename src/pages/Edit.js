import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Dùng để lấy ID từ URL
import { getCarDetail,updateCar } from "../api/carApi";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Container,
  Alert,
  Box,
  TextareaAutosize,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Switch
} from "@mui/material";

const CarDetails = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    version: "",
    vehicle_segment: "",
    price: "",
    description: "",
    // Thông số động cơ/hộp số
    kieuDongCo: "",
    dungTich: "",
    congSuat: "",
    momenXoan: "",
    hopso: "",
    heDanDong: "",
    loaiNhienLieu: "",
    mucTieuThuNhienLieu: "",
    // Thông số kích thước/trọng lượng
    soCho: "",
    kichThuoc: "",
    chieuDaiCoSo: "",
    khoangSangGam: "",
    banKinhVongQuay: "",
    theTichKhoangHanhLy: "",
    dungTichBinhNhienLieu: "",
    trongLuongBanThan: "",
    trongLuongToanTai: "",
    lop_lazang: "",

    treoTruoc: "",
    treoSau: "",
    phanhTruoc: "",
    phanhSau: "",
    treoTruoc_checked: false,
    treoSau_checked: false,
    phanhTruoc_checked: false,
    phanhSau_checked: false,

    denPhanhTrenCao: '',
    guongChieuHau: '',
    sayGuongChieuHau: '',
    gatMuaTuDong: '',
    denChieuXa: '',
    denChieuGan: '',
    denBanNgay: '',
    denPhaTuDongBat_Tat: '',
    denPhaTuDongXa_Gan: '',
    denPhaTuDongDieuChinhGocChieu: '',
    denHau: '',
    angTenVayCa: '',
    copDong_MoDien: '',
    moCopRanhTay: '',
    denPhanhTrenCao_checked: false,
    guongChieuHau_checked: false,
    sayGuongChieuHau_checked: false,
    gatMuaTuDong_checked: false,
    denChieuXa_checked: false,
    denChieuGan_checked: false,
    denBanNgay_checked: false,
    denPhaTuDongBat_Tat_checked: false,
    denPhaTuDongXa_Gan_checked: false,
    denPhaTuDongDieuChinhGocChieu_checked: false,
    denHau_checked: false,
    angTenVayCa_checked: false,
    copDong_MoDien_checked: false,
    moCopRanhTay_checked: false,

    chatLieuBocGhe: '',
    dieuChinhGheLai: '',
    nhoViTriGheLai: '',
    massageGheLai: '',
    dieuChinhGhePhu: '',
    massageGhePhu: '',
    thongGioGheLai: '',
    thongGioGhePhu: '',
    suoiAmGheLai: '',
    suoiAmGhePhu: '',
    bangDongHoTaiXe: '',
    nutBamTichHopTrenVolang: '',
    chatLieuBocVoLang: '',
    chiaKhoaThongMinh: '',
    khoiDongNutBam: '',
    dieuHoa: '',
    cuaGioHangGheSau: '',
    cuaKinhMotCham: '',
    cuaSoTroi: '',
    cuaSoTroiToanCanh: '',
    guongChieuHauTrongXeChongChoiTuDong: '',
    tuaTayHangGheTruoc: '',
    tuaTayHangGheSau: '',
    manHinhGiaiTri: '',
    ketNoiAppleCarPlay: '',
    ketNoiAndroidAuto: '',
    raLenhGiongNoi: '',
    damThoaiRanhTay: '',
    heThongLoa: '',
    phatWifi: '',
    ketNoiAUX: '',
    ketNoiUSB: '',
    ketNoiBluetooth: '',
    radioAM_FM: '',
    sacKhongDay: '',
    // Các trường kiểm tra
    chatLieuBocGhe_checked: false,
    dieuChinhGheLai_checked: false,
    nhoViTriGheLai_checked: false,
    massageGheLai_checked: false,
    dieuChinhGhePhu_checked: false,
    massageGhePhu_checked: false,
    thongGioGheLai_checked: false,
    thongGioGhePhu_checked: false,
    suoiAmGheLai_checked: false,
    suoiAmGhePhu_checked: false,
    bangDongHoTaiXe_checked: false,
    nutBamTichHopTrenVolang_checked: false,
    chatLieuBocVoLang_checked: false,
    chiaKhoaThongMinh_checked: false,
    khoiDongNutBam_checked: false,
    dieuHoa_checked: false,
    cuaGioHangGheSau_checked: false,
    cuaKinhMotCham_checked: false,
    cuaSoTroi_checked: false,
    cuaSoTroiToanCanh_checked: false,
    guongChieuHauTrongXeChongChoiTuDong_checked: false,
    tuaTayHangGheTruoc_checked: false,
    tuaTayHangGheSau_checked: false,
    manHinhGiaiTri_checked: false,
    ketNoiAppleCarPlay_checked: false,
    ketNoiAndroidAuto_checked: false,
    raLenhGiongNoi_checked: false,
    damThoaiRanhTay_checked: false,
    heThongLoa_checked: false,
    phatWifi_checked: false,
    ketNoiAUX_checked: false,
    ketNoiUSB_checked: false,
    ketNoiBluetooth_checked: false,
    radioAM_FM_checked: false,
    sacKhongDay_checked: false,

    troLucVoLang: '',
    nhieuCheDoLai: '',
    layChuyenSoTrenVoLang: '',
    kiemSoatGiaToc: '',
    phanhTayDienTu: '',
    giuPhanhTuDong: '',
    troLucVoLang_checked: false,
    nhieuCheDoLai_checked: false,
    layChuyenSoTrenVoLang_checked: false,
    kiemSoatGiaToc_checked: false,
    phanhTayDienTu_checked: false,
    giuPhanhTuDong_checked: false,

    kiemSoatHanhTrinh: '',
    kiemSoatHanhTrinhThichUng: '',
    canhBaoPhuongTienCatNgangKhiLui: '',
    canhBaoTaiXeBuonNgu: '',
    mocGheAnToanChoTreEmIsofix: '',
    hoTroDoDeo: '',
    canhBaoDiemMu: '',
    cameraLui: '',
    camera360: '',
    cameraQuanSatLanDuong: '',
    canhBaoChechLanDuong: '',
    hoTroGiuLan: '',
    hoTroPhanhTuDongGiamThieuVaCham: '',
    phanPhoiLucPhanhDienTu: '',
    canBangDienTu: '',
    kiemSoatLucKeo: '',
    hoTroKhoiHanhNgangDoc: '',
    soTuiKhi: '',
    chongBoCungPhanh: '',
    hoTroLucPhanhKhanCap: '',
    // Các trường kiểm tra
    kiemSoatHanhTrinh_checked: false,
    kiemSoatHanhTrinhThichUng_checked: false,
    canhBaoPhuongTienCatNgangKhiLui_checked: false,
    canhBaoTaiXeBuonNgu_checked: false,
    mocGheAnToanChoTreEmIsofix_checked: false,
    hoTroDoDeo_checked: false,
    canhBaoDiemMu_checked: false,
    cameraLui_checked: false,
    camera360_checked: false,
    cameraQuanSatLanDuong_checked: false,
    canhBaoChechLanDuong_checked: false,
    hoTroGiuLan_checked: false,
    hoTroPhanhTuDongGiamThieuVaCham_checked: false,
    phanPhoiLucPhanhDienTu_checked: false,
    canBangDienTu_checked: false,
    kiemSoatLucKeo_checked: false,
    hoTroKhoiHanhNgangDoc_checked: false,
    soTuiKhi_checked: false,
    chongBoCungPhanh_checked: false,
    hoTroLucPhanhKhanCap_checked: false,
  });

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

   // Lấy dữ liệu từ API
   useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const carData = await getCarDetail(id); // Gọi hàm getCarDetail từ carApi.js
        setFormData(carData); // Điền dữ liệu vào form
        setImages(carData.imageUrl || []); // Nếu có hình ảnh, điền vào
      } catch (err) {
        setError("Không thể tải dữ liệu sản phẩm!");
      }
    };
  
    fetchCarDetails();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...urls]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Debug dữ liệu trước khi gửi
      console.log("images:", images);
      console.log("formData:", formData);
  
      // Gọi API cập nhật sản phẩm
      const response = await updateCar(id, formData, images);
  
      // Kiểm tra phản hồi từ API
      if (response.status === 200) {
        setSuccess("Cập nhật sản phẩm thành công!");
        setError(null); // Xóa thông báo lỗi trước đó
        alert("Cập nhật sản phẩm thành công!"); // Hiển thị thông báo thành công
  
        window.location.reload(); // Reload lại trang
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi cập nhật sản phẩm!");
      setSuccess(null); // Xóa thông báo thành công nếu có lỗi
      alert("Có lỗi xảy ra khi cập nhật sản phẩm!");
      console.error("Error during update:", err); // In lỗi ra console để debug
    }
  };



  return (
    <Container className="mt-4">
      <h2>Thông số kỹ thuật xe</h2>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <form onSubmit={handleSubmit}>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Tên xe"
            variant="outlined"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Hãng xe"
            variant="outlined"
            name="brand"
            fullWidth
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Phiên bản"
            variant="outlined"
            name="version"
            fullWidth
            value={formData.version}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <div className="form-group">
            <label htmlFor="vehicle_segment">Phân khúc xe</label>
            <select
              className="form-control custom-select"
              id="vehicle_segment"
              name="vehicle_segment"
              value={formData.vehicle_segment}
              onChange={handleChange}
              required
            >
              <option value="" disabled>-- Chọn phân khúc xe --</option>
              <option value="Xe nhỏ cỡ A" selected={formData.vehicle_segment === "Xe nhỏ cỡ A"}>Xe nhỏ cỡ A</option>
              <option value="Xe nhỏ hạng B" selected={formData.vehicle_segment === "Xe nhỏ hạng B"}>Xe nhỏ hạng B</option>
              <option value="Xe nhỏ hạng B+/C-" selected={formData.vehicle_segment === "Xe nhỏ hạng B+/C-"}>Xe nhỏ hạng B+/C-</option>
              <option value="Xe cỡ vừa hạng C" selected={formData.vehicle_segment === "Xe cỡ vừa hạng C"}>Xe cỡ vừa hạng C</option>
              <option value="Xe cỡ trung hạng D" selected={formData.vehicle_segment === "Xe cỡ trung hạng D"}>Xe cỡ trung hạng D</option>
              <option value="Xe cỡ trung hạng E" selected={formData.vehicle_segment === "Xe cỡ trung hạng E"}>Xe cỡ trung hạng E</option>
              <option value="Bán tải cỡ trung" selected={formData.vehicle_segment === "Bán tải cỡ trung"}>Bán tải cỡ trung</option>
              <option value="MPV cỡ nhỏ" selected={formData.vehicle_segment === "MPV cỡ nhỏ"}>MPV cỡ nhỏ</option>
              <option value="MPV cỡ trung" selected={formData.vehicle_segment === "MPV cỡ trung"}>MPV cỡ trung</option>
              <option value="SUV phổ thông cỡ lớn" selected={formData.vehicle_segment === "SUV phổ thông cỡ lớn"}>SUV phổ thông cỡ lớn</option>
              <option value="Xe nhỏ cỡ A+/B-" selected={formData.vehicle_segment === "Xe nhỏ cỡ A+/B-"}>Xe nhỏ cỡ A+/B-</option>
              <option value="Xe siêu nhỏ" selected={formData.vehicle_segment === "Xe siêu nhỏ"}>Xe siêu nhỏ</option>
              <option value="MPV cỡ lớn" selected={formData.vehicle_segment === "MPV cỡ lớn"}>MPV cỡ lớn</option>
              <option value="Xe sang cỡ nhỏ" selected={formData.vehicle_segment === "Xe sang cỡ nhỏ"}>Xe sang cỡ nhỏ</option>
              <option value="Xe sang cỡ trung" selected={formData.vehicle_segment === "Xe sang cỡ trung"}>Xe sang cỡ trung</option>
              <option value="Xe sang cỡ lớn" selected={formData.vehicle_segment === "Xe sang cỡ lớn"}>Xe sang cỡ lớn</option>
              <option value="MPV hạng sang" selected={formData.vehicle_segment === "MPV hạng sang"}>MPV hạng sang</option>
              <option value="Bán tải cỡ lớn" selected={formData.vehicle_segment === "Bán tải cỡ lớn"}>Bán tải cỡ lớn</option>
              <option value="Siêu xe/Xe thể thao" selected={formData.vehicle_segment === "Siêu xe/Xe thể thao"}>Siêu xe/Xe thể thao</option>
              <option value="Siêu sang cỡ lớn" selected={formData.vehicle_segment === "Siêu sang cỡ lớn"}>Siêu sang cỡ lớn</option>
            </select>
          </div>
        </Box>


        <Box sx={{ mb: 2 }}>
          <TextField
            label="Giá"
            variant="outlined"
            name="price"
            fullWidth
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ width: "100%" }}
          />
          <div
            style={{ display: "flex", marginTop: "10px", overflowX: "auto" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{ position: "relative", marginRight: "10px" }}
              >
                <img
                  src={image}
                  alt="preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <span
                  onClick={() => handleRemoveImage(index)}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    cursor: "pointer",
                    color: "red",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "2px 5px",
                    fontWeight: "bold",
                  }}
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextareaAutosize
            aria-label="Mô tả"
            minRows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Nhập mô tả cho xe..."
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* Động cơ/Hộp số */}
        <Box sx={{ mb: 2, mt: 4, border: "1px solid #ccc", padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Thông số kỹ thuật - Động cơ/Hộp số
          </Typography>
          <TextField
            label="Kiểu động cơ"
            variant="outlined"
            name="kieuDongCo"
            fullWidth
            value={formData.kieuDongCo}
            onChange={handleChange}
          />
          <TextField
            label="Dung tích"
            variant="outlined"
            name="dungTich"
            fullWidth
            value={formData.dungTich}
            onChange={handleChange}
          />
          <TextField
            label="Công suất"
            variant="outlined"
            name="congSuat"
            fullWidth
            value={formData.congSuat}
            onChange={handleChange}
          />
          <TextField
            label="Mô-men xoắn"
            variant="outlined"
            name="momenXoan"
            fullWidth
            value={formData.momenXoan}
            onChange={handleChange}
          />
          <TextField
            label="Hộp số"
            variant="outlined"
            name="hopso"
            fullWidth
            value={formData.hopso}
            onChange={handleChange}
          />
          <TextField
            label="Hệ dẫn động"
            variant="outlined"
            name="heDanDong"
            fullWidth
            value={formData.heDanDong}
            onChange={handleChange}
          />
          <TextField
            label="Loại nhiên liệu"
            variant="outlined"
            name="loaiNhienLieu"
            fullWidth
            value={formData.loaiNhienLieu}
            onChange={handleChange}
          />
          <TextField
            label="Mức tiêu thụ nhiên liệu"
            variant="outlined"
            name="mucTieuThuNhienLieu"
            fullWidth
            value={formData.mucTieuThuNhienLieu}
            onChange={handleChange}
          />
        </Box>

        {/* Kích thước/Trọng lượng */}
        <Box sx={{ mb: 2, mt: 4, border: "1px solid #ccc", padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Thông số kỹ thuật - Kích thước/Trọng lượng
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Số chỗ"
                variant="outlined"
                name="soCho"
                fullWidth
                value={formData.soCho}
                onChange={handleChange}
              />
              <TextField
                label="Kích thước"
                variant="outlined"
                name="kichThuoc"
                fullWidth
                value={formData.kichThuoc}
                onChange={handleChange}
              />
              <TextField
                label="Chiều dài cơ sở"
                variant="outlined"
                name="chieuDaiCoSo"
                fullWidth
                value={formData.chieuDaiCoSo}
                onChange={handleChange}
              />
              <TextField
                label="Khoảng sáng gầm"
                variant="outlined"
                name="khoangSangGam"
                fullWidth
                value={formData.khoangSangGam}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Bán kính vòng quay"
                variant="outlined"
                name="banKinhVongQuay"
                fullWidth
                value={formData.banKinhVongQuay}
                onChange={handleChange}
              />
              <TextField
                label="Thể tích khoang hành lý"
                variant="outlined"
                name="theTichKhoangHanhLy"
                fullWidth
                value={formData.theTichKhoangHanhLy}
                onChange={handleChange}
              />
              <TextField
                label="Dung tích bình nhiên liệu"
                variant="outlined"
                name="dungTichBinhNhienLieu"
                fullWidth
                value={formData.dungTichBinhNhienLieu}
                onChange={handleChange}
              />
              <TextField
                label="Trọng lượng bản thân"
                variant="outlined"
                name="trongLuongBanThan"
                fullWidth
                value={formData.trongLuongBanThan}
                onChange={handleChange}
              />
              <TextField
                label="Trọng lượng toàn tải"
                variant="outlined"
                name="trongLuongToanTai"
                fullWidth
                value={formData.trongLuongToanTai}
                onChange={handleChange}
              />
              <TextField
                label="Lốp/lazang"
                variant="outlined"
                name="lop_lazang"
                fullWidth
                value={formData.lop_lazang}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Treo trước */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Treo trước"
            variant="outlined"
            name="treoTruoc"
            fullWidth
            value={formData.treoTruoc || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                treoTruoc: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.treoTruoc === "có" || 
                  formData.treoTruoc === "true" || 
                  (formData.treoTruoc && formData.treoTruoc !== "không có" && formData.treoTruoc !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    treoTruoc: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Treo sau */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Treo sau"
            variant="outlined"
            name="treoSau"
            fullWidth
            value={formData.treoSau || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                treoSau: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.treoSau === "có" || 
                  formData.treoSau === "true" || 
                  (formData.treoSau && formData.treoSau !== "không có" && formData.treoSau !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    treoSau: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Phanh trước */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Phanh trước"
            variant="outlined"
            name="phanhTruoc"
            fullWidth
            value={formData.phanhTruoc || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                phanhTruoc: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.phanhTruoc === "có" || 
                  formData.phanhTruoc === "true" || 
                  (formData.phanhTruoc && formData.phanhTruoc !== "không có" && formData.phanhTruoc !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    phanhTruoc: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Phanh sau */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Phanh sau"
            variant="outlined"
            name="phanhSau"
            fullWidth
            value={formData.phanhSau || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                phanhSau: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.phanhSau === "có" || 
                  formData.phanhSau === "true" || 
                  (formData.phanhSau && formData.phanhSau !== "không có" && formData.phanhSau !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    phanhSau: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn phanh trên cao */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn phanh trên cao"
            variant="outlined"
            name="denPhanhTrenCao"
            fullWidth
            value={formData.denPhanhTrenCao || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denPhanhTrenCao: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denPhanhTrenCao === "có" || 
                  formData.denPhanhTrenCao === "true" || 
                  (formData.denPhanhTrenCao && formData.denPhanhTrenCao !== "không có" && formData.denPhanhTrenCao !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denPhanhTrenCao: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Gương chiếu hậu */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Gương chiếu hậu"
            variant="outlined"
            name="guongChieuHau"
            fullWidth
            value={formData.guongChieuHau || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                guongChieuHau: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.guongChieuHau === "có" || 
                  formData.guongChieuHau === "true" || 
                  (formData.guongChieuHau && formData.guongChieuHau !== "không có" && formData.guongChieuHau !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    guongChieuHau: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>



        <Typography variant="h4" gutterBottom>
        Thông số kỹ thuật - Ngoại thất
        </Typography>

        {/* Sấy gương chiếu hậu */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Sấy gương chiếu hậu"
            variant="outlined"
            name="sayGuongChieuHau"
            fullWidth
            value={formData.sayGuongChieuHau || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                sayGuongChieuHau: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.sayGuongChieuHau === "có" || 
                  formData.sayGuongChieuHau === "true" || 
                  (formData.sayGuongChieuHau && formData.sayGuongChieuHau !== "không có" && formData.sayGuongChieuHau !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    sayGuongChieuHau: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Gạt mưa tự động */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Gạt mưa tự động"
            variant="outlined"
            name="gatMuaTuDong"
            fullWidth
            value={formData.gatMuaTuDong || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                gatMuaTuDong: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.gatMuaTuDong === "có" || 
                  formData.gatMuaTuDong === "true" || 
                  (formData.gatMuaTuDong && formData.gatMuaTuDong !== "không có" && formData.gatMuaTuDong !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    gatMuaTuDong: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn chiếu xa */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn chiếu xa"
            variant="outlined"
            name="denChieuXa"
            fullWidth
            value={formData.denChieuXa || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denChieuXa: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denChieuXa === "có" || 
                  formData.denChieuXa === "true" || 
                  (formData.denChieuXa && formData.denChieuXa !== "không có" && formData.denChieuXa !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denChieuXa: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>


       {/* Đèn chiếu gần */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn chiếu gần"
            variant="outlined"
            name="denChieuGan"
            fullWidth
            value={formData.denChieuGan || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denChieuGan: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denChieuGan === "có" || 
                  formData.denChieuGan === "true" || 
                  (formData.denChieuGan && formData.denChieuGan !== "không có" && formData.denChieuGan !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denChieuGan: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn ban ngày */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn ban ngày"
            variant="outlined"
            name="denBanNgay"
            fullWidth
            value={formData.denBanNgay || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denBanNgay: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denBanNgay === "có" || 
                  formData.denBanNgay === "true" || 
                  (formData.denBanNgay && formData.denBanNgay !== "không có" && formData.denBanNgay !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denBanNgay: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn pha tự động bật/tắt */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn pha tự động bật/tắt"
            variant="outlined"
            name="denPhaTuDongBat_Tat"
            fullWidth
            value={formData.denPhaTuDongBat_Tat || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denPhaTuDongBat_Tat: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denPhaTuDongBat_Tat === "có" || 
                  formData.denPhaTuDongBat_Tat === "true" || 
                  (formData.denPhaTuDongBat_Tat && formData.denPhaTuDongBat_Tat !== "không có" && formData.denPhaTuDongBat_Tat !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denPhaTuDongBat_Tat: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn pha tự động xa/gần */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn pha tự động xa/gần"
            variant="outlined"
            name="denPhaTuDongXa_Gan"
            fullWidth
            value={formData.denPhaTuDongXa_Gan || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denPhaTuDongXa_Gan: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denPhaTuDongXa_Gan === "có" || 
                  formData.denPhaTuDongXa_Gan === "true" || 
                  (formData.denPhaTuDongXa_Gan && formData.denPhaTuDongXa_Gan !== "không có" && formData.denPhaTuDongXa_Gan !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denPhaTuDongXa_Gan: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn pha tự động điều chỉnh góc chiếu */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn pha tự động điều chỉnh góc chiếu"
            variant="outlined"
            name="denPhaTuDongDieuChinhGocChieu"
            fullWidth
            value={formData.denPhaTuDongDieuChinhGocChieu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denPhaTuDongDieuChinhGocChieu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denPhaTuDongDieuChinhGocChieu === "có" || 
                  formData.denPhaTuDongDieuChinhGocChieu === "true" || 
                  (formData.denPhaTuDongDieuChinhGocChieu && formData.denPhaTuDongDieuChinhGocChieu !== "không có" && formData.denPhaTuDongDieuChinhGocChieu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denPhaTuDongDieuChinhGocChieu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đèn hậu */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đèn hậu"
            variant="outlined"
            name="denHau"
            fullWidth
            value={formData.denHau || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                denHau: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.denHau === "có" || 
                  formData.denHau === "true" || 
                  (formData.denHau && formData.denHau !== "không có" && formData.denHau !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    denHau: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Ăng-ten vây cá */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Ăng-ten vây cá"
            variant="outlined"
            name="angTenVayCa"
            fullWidth
            value={formData.angTenVayCa || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                angTenVayCa: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.angTenVayCa === "có" || 
                  formData.angTenVayCa === "true" || 
                  (formData.angTenVayCa && formData.angTenVayCa !== "không có" && formData.angTenVayCa !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    angTenVayCa: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Cảm biến góc */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cảm biến góc"
            variant="outlined"
            name="camBienGoc"
            fullWidth
            value={formData.camBienGoc || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                camBienGoc: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.camBienGoc === "có" || 
                  formData.camBienGoc === "true" || 
                  (formData.camBienGoc && formData.camBienGoc !== "không có" && formData.camBienGoc !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    camBienGoc: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>


        <Typography variant="h4" gutterBottom>
        Thông số kỹ thuật - Nội thất
        </Typography>
        {/* Chất liệu bọc ghế */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Chất liệu bọc ghế"
            variant="outlined"
            name="chatLieuBocGhe"
            fullWidth
            value={formData.chatLieuBocGhe || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                chatLieuBocGhe: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.chatLieuBocGhe === "có" || 
                  formData.chatLieuBocGhe === "true" || 
                  (formData.chatLieuBocGhe && formData.chatLieuBocGhe !== "không có" && formData.chatLieuBocGhe !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    chatLieuBocGhe: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Điều chỉnh ghế lái */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Điều chỉnh ghế lái"
            variant="outlined"
            name="dieuChinhGheLai"
            fullWidth
            value={formData.dieuChinhGheLai || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                dieuChinhGheLai: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.dieuChinhGheLai === "có" || 
                  formData.dieuChinhGheLai === "true" || 
                  (formData.dieuChinhGheLai && formData.dieuChinhGheLai !== "không có" && formData.dieuChinhGheLai !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    dieuChinhGheLai: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Nhớ vị trí ghế lái */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Nhớ vị trí ghế lái"
            variant="outlined"
            name="nhoViTriGheLai"
            fullWidth
            value={formData.nhoViTriGheLai || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                nhoViTriGheLai: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.nhoViTriGheLai === "có" || 
                  formData.nhoViTriGheLai === "true" || 
                  (formData.nhoViTriGheLai && formData.nhoViTriGheLai !== "không có" && formData.nhoViTriGheLai !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    nhoViTriGheLai: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Massage ghế lái */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Massage ghế lái"
            variant="outlined"
            name="massageGheLai"
            fullWidth
            value={formData.massageGheLai || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                massageGheLai: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.massageGheLai === "có" || 
                  formData.massageGheLai === "true" || 
                  (formData.massageGheLai && formData.massageGheLai !== "không có" && formData.massageGheLai !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    massageGheLai: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* // Điều chỉnh ghế phụ */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Điều chỉnh ghế phụ"
            variant="outlined"
            name="dieuChinhGhePhu"
            fullWidth
            value={formData.dieuChinhGhePhu|| "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                dieuChinhGhePhu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.dieuChinhGhePhu === "có" ||
                  formData.dieuChinhGhePhu=== "true" ||
                  (formData.dieuChinhGhePhu && formData.dieuChinhGhePhu !== "không có" && formData.dieuChinhGhePhu!== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    dieuChinhGhePhu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Massage ghế phụ */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Massage ghế phụ"
            variant="outlined"
            name="massageGhePhu"
            fullWidth
            value={formData.massageGhePhu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                massageGhePhu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.massageGhePhu === "có" ||
                  formData.massageGhePhu === "true" ||
                  (formData.massageGhePhu && formData.massageGhePhu !== "không có" && formData.massageGhePhu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    massageGhePhu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Thông gió ghế lái */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Thông gió ghế lái"
            variant="outlined"
            name="thongGioGheLai"
            fullWidth
            value={formData.thongGioGheLai || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                thongGioGheLai: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.thongGioGheLai === "có" ||
                  formData.thongGioGheLai === "true" ||
                  (formData.thongGioGheLai && formData.thongGioGheLai !== "không có" && formData.thongGioGheLai !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    thongGioGheLai: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Thông gió ghế phụ */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Thông gió ghế phụ"
            variant="outlined"
            name="thongGioGhePhu"
            fullWidth
            value={formData.thongGioGhePhu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                thongGioGhePhu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.thongGioGhePhu === "có" ||
                  formData.thongGioGhePhu === "true" ||
                  (formData.thongGioGhePhu && formData.thongGioGhePhu !== "không có" && formData.thongGioGhePhu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    thongGioGhePhu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Sưởi ấm ghế lái */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Sưởi ấm ghế lái"
            variant="outlined"
            name="suoiAmGheLai"
            fullWidth
            value={formData.suoiAmGheLai || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                suoiAmGheLai: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.suoiAmGheLai === "có" ||
                  formData.suoiAmGheLai === "true" ||
                  (formData.suoiAmGheLai && formData.suoiAmGheLai !== "không có" && formData.suoiAmGheLai !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    suoiAmGheLai: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Sưởi ấm ghế phụ */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Sưởi ấm ghế phụ"
            variant="outlined"
            name="suoiAmGhePhu"
            fullWidth
            value={formData.suoiAmGhePhu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                suoiAmGhePhu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.suoiAmGhePhu === "có" ||
                  formData.suoiAmGhePhu === "true" ||
                  (formData.suoiAmGhePhu && formData.suoiAmGhePhu !== "không có" && formData.suoiAmGhePhu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    suoiAmGhePhu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* // Bảng đồng hồ tài xế */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Bảng đồng hồ tài xế"
            variant="outlined"
            name="bangDongHoTaiXe"
            fullWidth
            value={formData.bangDongHoTaiXe || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                bangDongHoTaiXe: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.bangDongHoTaiXe === "có" ||
                  formData.bangDongHoTaiXe === "true" ||
                  (formData.bangDongHoTaiXe && formData.bangDongHoTaiXe !== "không có" && formData.bangDongHoTaiXe !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    bangDongHoTaiXe: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        {/* // Nút bấm tích hợp trên vô lăng */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Nút bấm tích hợp trên vô lăng"
            variant="outlined"
            name="nutBamTichHopTrenVolang"
            fullWidth
            value={formData.nutBamTichHopTrenVolang || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                nutBamTichHopTrenVolang: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.nutBamTichHopTrenVolang === "có" ||
                  formData.nutBamTichHopTrenVolang === "true" ||
                  (formData.nutBamTichHopTrenVolang && formData.nutBamTichHopTrenVolang !== "không có" && formData.nutBamTichHopTrenVolang !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    nutBamTichHopTrenVolang: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        

        {/* // Chất liệu bọc vô lăng */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Chất liệu bọc vô lăng"
            variant="outlined"
            name="chatLieuBocVolang"
            fullWidth
            value={formData.chatLieuBocVolang || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                chatLieuBocVolang: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.chatLieuBocVolang === "có" ||
                  formData.chatLieuBocVolang === "true" ||
                  (formData.chatLieuBocVolang && formData.chatLieuBocVolang !== "không có" && formData.chatLieuBocVolang !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    chatLieuBocVolang: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>


        {/* Cửa sổ trời */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cửa sổ trời"
            variant="outlined"
            name="cuaSoTroi"
            fullWidth
            value={formData.cuaSoTroi || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                cuaSoTroi: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.cuaSoTroi === "có" ||
                  formData.cuaSoTroi === "true" ||
                  (formData.cuaSoTroi && formData.cuaSoTroi !== "không có" && formData.cuaSoTroi !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    cuaSoTroi: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        {/* Cửa sổ trời toàn cảnh */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cửa sổ trời toàn cảnh"
            variant="outlined"
            name="cuaSoTroiToanCanh"
            fullWidth
            value={formData.cuaSoTroiToanCanh || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                cuaSoTroiToanCanh: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.cuaSoTroiToanCanh === "có" ||
                  formData.cuaSoTroiToanCanh === "true" ||
                  (formData.cuaSoTroiToanCanh && formData.cuaSoTroiToanCanh !== "không có" && formData.cuaSoTroiToanCanh !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    cuaSoTroiToanCanh: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Gương chiếu hậu trong xe chống chói tự động */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Gương chiếu hậu trong xe chống chói tự động"
            variant="outlined"
            name="guongChieuHauTrongXeChongChoiTuDong"
            fullWidth
            value={formData.guongChieuHauTrongXeChongChoiTuDong || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                guongChieuHauTrongXeChongChoiTuDong: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.guongChieuHauTrongXeChongChoiTuDong === "có" ||
                  formData.guongChieuHauTrongXeChongChoiTuDong === "true" ||
                  (formData.guongChieuHauTrongXeChongChoiTuDong && formData.guongChieuHauTrongXeChongChoiTuDong !== "không có" && formData.guongChieuHauTrongXeChongChoiTuDong !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    guongChieuHauTrongXeChongChoiTuDong: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        

        {/* Tựa tay hàng ghế trước */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Tựa tay hàng ghế trước"
            variant="outlined"
            name="tuaTayHangGheTruoc"
            fullWidth
            value={formData.tuaTayHangGheTruoc || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                tuaTayHangGheTruoc: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.tuaTayHangGheTruoc === "có" ||
                  formData.tuaTayHangGheTruoc === "true" ||
                  (formData.tuaTayHangGheTruoc && formData.tuaTayHangGheTruoc !== "không có" && formData.tuaTayHangGheTruoc !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    tuaTayHangGheTruoc: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        

        {/* Tựa tay hàng ghế sau */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Tựa tay hàng ghế sau"
            variant="outlined"
            name="tuaTayHangGheSau"
            fullWidth
            value={formData.tuaTayHangGheSau || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                tuaTayHangGheSau: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.tuaTayHangGheSau === "có" ||
                  formData.tuaTayHangGheSau === "true" ||
                  (formData.tuaTayHangGheSau && formData.tuaTayHangGheSau !== "không có" && formData.tuaTayHangGheSau !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    tuaTayHangGheSau: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        

        {/* Màn hình giải trí */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Màn hình giải trí"
            variant="outlined"
            name="manHinhGiaiTri"
            fullWidth
            value={formData.manHinhGiaiTri || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                manHinhGiaiTri: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.manHinhGiaiTri === "có" ||
                  formData.manHinhGiaiTri === "true" ||
                  (formData.manHinhGiaiTri && formData.manHinhGiaiTri !== "không có" && formData.manHinhGiaiTri !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    manHinhGiaiTri: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Kết nối Apple CarPlay */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kết nối Apple CarPlay"
            variant="outlined"
            name="ketNoiAppleCarPlay"
            fullWidth
            value={formData.ketNoiAppleCarPlay || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                ketNoiAppleCarPlay: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.ketNoiAppleCarPlay === "có" ||
                  formData.ketNoiAppleCarPlay === "true" ||
                  (formData.ketNoiAppleCarPlay && formData.ketNoiAppleCarPlay !== "không có" && formData.ketNoiAppleCarPlay !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    ketNoiAppleCarPlay: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Kết nối Android Auto */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kết nối Android Auto"
            variant="outlined"
            name="ketNoiAndroidAuto"
            fullWidth
            value={formData.ketNoiAndroidAuto || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                ketNoiAndroidAuto: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.ketNoiAndroidAuto === "có" ||
                  formData.ketNoiAndroidAuto === "true" ||
                  (formData.ketNoiAndroidAuto && formData.ketNoiAndroidAuto !== "không có" && formData.ketNoiAndroidAuto !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    ketNoiAndroidAuto: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        {/* Ra lệnh giọng nói */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Ra lệnh giọng nói"
            variant="outlined"
            name="raLenhGiongNoi"
            fullWidth
            value={formData.raLenhGiongNoi || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                raLenhGiongNoi: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.raLenhGiongNoi === "có" ||
                  formData.raLenhGiongNoi === "true" ||
                  (formData.raLenhGiongNoi && formData.raLenhGiongNoi !== "không có" && formData.raLenhGiongNoi !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    raLenhGiongNoi: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Đàm thoại rảnh tay */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Đàm thoại rảnh tay"
            variant="outlined"
            name="damThoaiRanhTay"
            fullWidth
            value={formData.damThoaiRanhTay || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                damThoaiRanhTay: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.damThoaiRanhTay === "có" ||
                  formData.damThoaiRanhTay === "true" ||
                  (formData.damThoaiRanhTay && formData.damThoaiRanhTay !== "không có" && formData.damThoaiRanhTay !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    damThoaiRanhTay: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        {/* Hệ thống loa */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Hệ thống loa"
            variant="outlined"
            name="heThongLoa"
            fullWidth
            value={formData.heThongLoa || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                heThongLoa: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.heThongLoa === "có" ||
                  formData.heThongLoa === "true" ||
                  (formData.heThongLoa && formData.heThongLoa !== "không có" && formData.heThongLoa !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    heThongLoa: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        {/* Phát Wifi */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Phát Wifi"
            variant="outlined"
            name="phatWifi"
            fullWidth
            value={formData.phatWifi || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                phatWifi: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.phatWifi === "có" ||
                  formData.phatWifi === "true" ||
                  (formData.phatWifi && formData.phatWifi !== "không có" && formData.phatWifi !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    phatWifi: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Kết nối AUX */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kết nối AUX"
            variant="outlined"
            name="ketNoiAUX"
            fullWidth
            value={formData.ketNoiAUX || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                ketNoiAUX: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.ketNoiAUX === "có" ||
                  formData.ketNoiAUX === "true" ||
                  (formData.ketNoiAUX && formData.ketNoiAUX !== "không có" && formData.ketNoiAUX !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    ketNoiAUX: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Kết nối USB */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kết nối USB"
            variant="outlined"
            name="ketNoiUSB"
            fullWidth
            value={formData.ketNoiUSB || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                ketNoiUSB: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.ketNoiUSB === "có" ||
                  formData.ketNoiUSB === "true" ||
                  (formData.ketNoiUSB && formData.ketNoiUSB !== "không có" && formData.ketNoiUSB !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    ketNoiUSB: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Kết nối Bluetooth */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kết nối Bluetooth"
            variant="outlined"
            name="ketNoiBluetooth"
            fullWidth
            value={formData.ketNoiBluetooth || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                ketNoiBluetooth: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.ketNoiBluetooth === "có" ||
                  formData.ketNoiBluetooth === "true" ||
                  (formData.ketNoiBluetooth && formData.ketNoiBluetooth !== "không có" && formData.ketNoiBluetooth !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    ketNoiBluetooth: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Radio AM/FM */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Radio AM/FM"
            variant="outlined"
            name="radioAM_FM"
            fullWidth
            value={formData.radioAM_FM || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                radioAM_FM: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.radioAM_FM === "có" ||
                  formData.radioAM_FM === "true" ||
                  (formData.radioAM_FM && formData.radioAM_FM !== "không có" && formData.radioAM_FM !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    radioAM_FM: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Sạc không dây */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Sạc không dây"
            variant="outlined"
            name="sacKhongDay"
            fullWidth
            value={formData.sacKhongDay || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                sacKhongDay: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.sacKhongDay === "có" ||
                  formData.sacKhongDay === "true" ||
                  (formData.sacKhongDay && formData.sacKhongDay !== "không có" && formData.sacKhongDay !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    sacKhongDay: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        <Typography variant="h4" gutterBottom>
        Thông số kỹ thuật - Hỗ trợ vận hành
        </Typography>
        {/* Trợ lực vô lăng */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Trợ lực vô lăng"
            variant="outlined"
            name="troLucVoLang"
            fullWidth
            value={formData.troLucVoLang || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                troLucVoLang: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.troLucVoLang === "có" ||
                  formData.troLucVoLang === "true" ||
                  (formData.troLucVoLang && formData.troLucVoLang !== "không có" && formData.troLucVoLang !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    troLucVoLang: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Nhiều chế độ lái */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Nhiều chế độ lái"
            variant="outlined"
            name="nhieuCheDoLai"
            fullWidth
            value={formData.nhieuCheDoLai || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                nhieuCheDoLai: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.nhieuCheDoLai === "có" ||
                  formData.nhieuCheDoLai === "true" ||
                  (formData.nhieuCheDoLai && formData.nhieuCheDoLai !== "không có" && formData.nhieuCheDoLai !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    nhieuCheDoLai: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Lẫy chuyển số trên vô lăng */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Lẫy chuyển số trên vô lăng"
            variant="outlined"
            name="layChuyenSoTrenVoLang"
            fullWidth
            value={formData.layChuyenSoTrenVoLang || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                layChuyenSoTrenVoLang: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.layChuyenSoTrenVoLang === "có" ||
                  formData.layChuyenSoTrenVoLang === "true" ||
                  (formData.layChuyenSoTrenVoLang && formData.layChuyenSoTrenVoLang !== "không có" && formData.layChuyenSoTrenVoLang !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    layChuyenSoTrenVoLang: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Kiểm soát gia tốc */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kiểm soát gia tốc"
            variant="outlined"
            name="kiemSoatGiaToc"
            fullWidth
            value={formData.kiemSoatGiaToc || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                kiemSoatGiaToc: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.kiemSoatGiaToc === "có" ||
                  formData.kiemSoatGiaToc === "true" ||
                  (formData.kiemSoatGiaToc && formData.kiemSoatGiaToc !== "không có" && formData.kiemSoatGiaToc !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    kiemSoatGiaToc: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Phanh tay điện tử */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Phanh tay điện tử"
            variant="outlined"
            name="phanhTayDienTu"
            fullWidth
            value={formData.phanhTayDienTu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                phanhTayDienTu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.phanhTayDienTu === "có" ||
                  formData.phanhTayDienTu === "true" ||
                  (formData.phanhTayDienTu && formData.phanhTayDienTu !== "không có" && formData.phanhTayDienTu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    phanhTayDienTu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Giữ phanh tự động */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Giữ phanh tự động"
            variant="outlined"
            name="giuPhanhTuDong"
            fullWidth
            value={formData.giuPhanhTuDong || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                giuPhanhTuDong: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.giuPhanhTuDong === "có" ||
                  formData.giuPhanhTuDong === "true" ||
                  (formData.giuPhanhTuDong && formData.giuPhanhTuDong !== "không có" && formData.giuPhanhTuDong !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    giuPhanhTuDong: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>
        
        <Typography variant="h4" gutterBottom>
        Thông số kỹ thuật - Công nghệ an toàn
        </Typography>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kiểm soát hành trình"
            variant="outlined"
            name="kiemSoatHanhTrinh"
            fullWidth
            value={formData.kiemSoatHanhTrinh || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                kiemSoatHanhTrinh: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.kiemSoatHanhTrinh === "có" ||
                  formData.kiemSoatHanhTrinh === "true" ||
                  (formData.kiemSoatHanhTrinh && formData.kiemSoatHanhTrinh !== "không có" && formData.kiemSoatHanhTrinh !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    kiemSoatHanhTrinh: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kiểm soát hành trình thích ứng"
            variant="outlined"
            name="kiemSoatHanhTrinhThichUng"
            fullWidth
            value={formData.kiemSoatHanhTrinhThichUng || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                kiemSoatHanhTrinhThichUng: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.kiemSoatHanhTrinhThichUng === "có" ||
                  formData.kiemSoatHanhTrinhThichUng === "true" ||
                  (formData.kiemSoatHanhTrinhThichUng && formData.kiemSoatHanhTrinhThichUng !== "không có" && formData.kiemSoatHanhTrinhThichUng !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    kiemSoatHanhTrinhThichUng: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>  

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cảnh báo phương tiện cắt ngang khi lùi"
            variant="outlined"
            name="canhBaoPhuongTienCatNgangKhiLui"
            fullWidth
            value={formData.canhBaoPhuongTienCatNgangKhiLui || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                canhBaoPhuongTienCatNgangKhiLui: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.canhBaoPhuongTienCatNgangKhiLui === "có" ||
                  formData.canhBaoPhuongTienCatNgangKhiLui === "true" ||
                  (formData.canhBaoPhuongTienCatNgangKhiLui && formData.canhBaoPhuongTienCatNgangKhiLui !== "không có" && formData.canhBaoPhuongTienCatNgangKhiLui !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    canhBaoPhuongTienCatNgangKhiLui: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>    

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cảnh báo tài xế buồn ngủ"
            variant="outlined"
            name="canhBaoTaiXeBuonNgu"
            fullWidth
            value={formData.canhBaoTaiXeBuonNgu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                canhBaoTaiXeBuonNgu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.canhBaoTaiXeBuonNgu === "có" ||
                  formData.canhBaoTaiXeBuonNgu === "true" ||
                  (formData.canhBaoTaiXeBuonNgu && formData.canhBaoTaiXeBuonNgu !== "không có" && formData.canhBaoTaiXeBuonNgu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    canhBaoTaiXeBuonNgu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>  

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Ghế an toàn cho trẻ em Isofix"
            variant="outlined"
            name="mocGheAnToanChoTreEmIsofix"
            fullWidth
            value={formData.mocGheAnToanChoTreEmIsofix || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                mocGheAnToanChoTreEmIsofix: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.mocGheAnToanChoTreEmIsofix === "có" ||
                  formData.mocGheAnToanChoTreEmIsofix === "true" ||
                  (formData.mocGheAnToanChoTreEmIsofix && formData.mocGheAnToanChoTreEmIsofix !== "không có" && formData.mocGheAnToanChoTreEmIsofix !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    mocGheAnToanChoTreEmIsofix: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Hỗ trợ đổ đèo"
            variant="outlined"
            name="hoTroDoDeo"
            fullWidth
            value={formData.hoTroDoDeo || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                hoTroDoDeo: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.hoTroDoDeo === "có" ||
                  formData.hoTroDoDeo === "true" ||
                  (formData.hoTroDoDeo && formData.hoTroDoDeo !== "không có" && formData.hoTroDoDeo !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    hoTroDoDeo: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cảnh báo điểm mù"
            variant="outlined"
            name="canhBaoDiemMu"
            fullWidth
            value={formData.canhBaoDiemMu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                canhBaoDiemMu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.canhBaoDiemMu === "có" ||
                  formData.canhBaoDiemMu === "true" ||
                  (formData.canhBaoDiemMu && formData.canhBaoDiemMu !== "không có" && formData.canhBaoDiemMu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    canhBaoDiemMu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Camera lùi"
            variant="outlined"
            name="cameraLui"
            fullWidth
            value={formData.cameraLui || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                cameraLui: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.cameraLui === "có" ||
                  formData.cameraLui === "true" ||
                  (formData.cameraLui && formData.cameraLui !== "không có" && formData.cameraLui !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    cameraLui: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Camera 360"
            variant="outlined"
            name="camera360"
            fullWidth
            value={formData.camera360 || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                camera360: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.camera360 === "có" ||
                  formData.camera360 === "true" ||
                  (formData.camera360 && formData.camera360 !== "không có" && formData.camera360 !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    camera360: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>


        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Camera quan sát làn đường"
            variant="outlined"
            name="cameraQuanSatLanDuong"
            fullWidth
            value={formData.cameraQuanSatLanDuong || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                cameraQuanSatLanDuong: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.cameraQuanSatLanDuong === "có" ||
                  formData.cameraQuanSatLanDuong === "true" ||
                  (formData.cameraQuanSatLanDuong && formData.cameraQuanSatLanDuong !== "không có" && formData.cameraQuanSatLanDuong !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    cameraQuanSatLanDuong: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cảnh báo lệch làn đường"
            variant="outlined"
            name="canhBaoChechLanDuong"
            fullWidth
            value={formData.canhBaoChechLanDuong || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                canhBaoChechLanDuong: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.canhBaoChechLanDuong === "có" ||
                  formData.canhBaoChechLanDuong === "true" ||
                  (formData.canhBaoChechLanDuong && formData.canhBaoChechLanDuong !== "không có" && formData.canhBaoChechLanDuong !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    canhBaoChechLanDuong: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Hỗ trợ giữ làn"
            variant="outlined"
            name="hoTroGiuLan"
            fullWidth
            value={formData.hoTroGiuLan || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                hoTroGiuLan: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.hoTroGiuLan === "có" ||
                  formData.hoTroGiuLan === "true" ||
                  (formData.hoTroGiuLan && formData.hoTroGiuLan !== "không có" && formData.hoTroGiuLan !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    hoTroGiuLan: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>


        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Hỗ trợ phanh tự động giảm thiểu va chạm"
            variant="outlined"
            name="hoTroPhanhTuDongGiamThieuVaCham"
            fullWidth
            value={formData.hoTroPhanhTuDongGiamThieuVaCham || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                hoTroPhanhTuDongGiamThieuVaCham: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.hoTroPhanhTuDongGiamThieuVaCham === "có" ||
                  formData.hoTroPhanhTuDongGiamThieuVaCham === "true" ||
                  (formData.hoTroPhanhTuDongGiamThieuVaCham && formData.hoTroPhanhTuDongGiamThieuVaCham !== "không có" && formData.hoTroPhanhTuDongGiamThieuVaCham !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    hoTroPhanhTuDongGiamThieuVaCham: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Phân phối lực phanh điện tử"
            variant="outlined"
            name="phanPhoiLucPhanhDienTu"
            fullWidth
            value={formData.phanPhoiLucPhanhDienTu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                phanPhoiLucPhanhDienTu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.phanPhoiLucPhanhDienTu === "có" ||
                  formData.phanPhoiLucPhanhDienTu === "true" ||
                  (formData.phanPhoiLucPhanhDienTu && formData.phanPhoiLucPhanhDienTu !== "không có" && formData.phanPhoiLucPhanhDienTu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    phanPhoiLucPhanhDienTu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Cân bằng điện tử"
            variant="outlined"
            name="canBangDienTu"
            fullWidth
            value={formData.canBangDienTu || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                canBangDienTu: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.canBangDienTu === "có" ||
                  formData.canBangDienTu === "true" ||
                  (formData.canBangDienTu && formData.canBangDienTu !== "không có" && formData.canBangDienTu !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    canBangDienTu: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Kiểm soát lực kéo"
            variant="outlined"
            name="kiemSoatLucKeo"
            fullWidth
            value={formData.kiemSoatLucKeo || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                kiemSoatLucKeo: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.kiemSoatLucKeo === "có" ||
                  formData.kiemSoatLucKeo === "true" ||
                  (formData.kiemSoatLucKeo && formData.kiemSoatLucKeo !== "không có" && formData.kiemSoatLucKeo !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    kiemSoatLucKeo: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Hỗ trợ khởi hành ngang dốc"
            variant="outlined"
            name="hoTroKhoiHanhNgangDoc"
            fullWidth
            value={formData.hoTroKhoiHanhNgangDoc || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                hoTroKhoiHanhNgangDoc: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.hoTroKhoiHanhNgangDoc === "có" ||
                  formData.hoTroKhoiHanhNgangDoc === "true" ||
                  (formData.hoTroKhoiHanhNgangDoc && formData.hoTroKhoiHanhNgangDoc !== "không có" && formData.hoTroKhoiHanhNgangDoc !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    hoTroKhoiHanhNgangDoc: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Số túi khí"
            variant="outlined"
            name="soTuiKhi"
            fullWidth
            value={formData.soTuiKhi || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                soTuiKhi: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.soTuiKhi === "có" ||
                  formData.soTuiKhi === "true" ||
                  (formData.soTuiKhi && formData.soTuiKhi !== "không có" && formData.soTuiKhi !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    soTuiKhi: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>


        {/* Chống bó cứng phanh */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Chống bó cứng phanh"
            variant="outlined"
            name="chongBoCungPhanh"
            fullWidth
            value={formData.chongBoCungPhanh || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                chongBoCungPhanh: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.chongBoCungPhanh === "có" ||
                  formData.chongBoCungPhanh === "true" ||
                  (formData.chongBoCungPhanh && formData.chongBoCungPhanh !== "không có" && formData.chongBoCungPhanh !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    chongBoCungPhanh: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        {/* Hỗ trợ lực phanh khẩn cấp */}
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Hỗ trợ lực phanh khẩn cấp"
            variant="outlined"
            name="hoTroLucPhanhKhanCap"
            fullWidth
            value={formData.hoTroLucPhanhKhanCap || "Chờ cập nhật"}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                hoTroLucPhanhKhanCap: value === "Chờ cập nhật" ? "" : value,
              }));
            }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={
                  formData.hoTroLucPhanhKhanCap === "có" ||
                  formData.hoTroLucPhanhKhanCap === "true" ||
                  (formData.hoTroLucPhanhKhanCap && formData.hoTroLucPhanhKhanCap !== "không có" && formData.hoTroLucPhanhKhanCap !== "false")
                }
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setFormData((prevData) => ({
                    ...prevData,
                    hoTroLucPhanhKhanCap: isChecked ? "có" : "không có",
                  }));
                }}
                color="primary"
              />
            }
            label="Có"
            sx={{ ml: 2 }}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary">
          Cập nhật
        </Button>
      </form>
    </Container>
  );
};

export default CarDetails;
