import React, { useEffect, useState } from "react";
import {
  Container,
  Alert,
  Button,
  Table,
  TableRow,
  TableCell,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  CircularProgress,
} from "@mui/material";
import CarDetailModal from "../components/CarDetailModal";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  fetchCarsDeleted,
  searchCars,
  deleteDB,
  bulkDeleteCars,
  getCarDetail,
  undoDeleteCar,
  UndobulkDeleteCars,
} from "../api/carApi";

const Deleted = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCars, setSelectedCars] = useState([]);
  const [sortKey, setSortKey] = useState("name");
  const [sortValue, setSortValue] = useState("asc");

  // Tìm kiếm
  const [searchKey, setSearchKey] = useState("brand");
  const [searchValue, setSearchValue] = useState("");

  //chi tiết xe
  const [selectedCar, setSelectedCar] = useState(null); // Xe được chọn để xem chi tiết
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCarsDeleted(page, sortKey, sortValue);
        setCars(data.cars);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch car data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [page, sortKey, sortValue]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Bắt đầu loading
      const data = await searchCars(searchKey, searchValue); // Gọi hàm searchCars
      setCars(data.cars);
      setTotalPages(data.totalPages);
      setPage(1); // Reset về trang đầu
      setLoading(false); // Kết thúc loading
    } catch (err) {
      setError("Failed to perform search.");
      setLoading(false); // Kết thúc loading
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelectedCars = cars.map((car) => car._id);
      setSelectedCars(newSelectedCars);
    } else {
      setSelectedCars([]);
    }
  };

  const handleSelectOne = (id) => {
    const newSelectedCars = selectedCars.includes(id)
      ? selectedCars.filter((carId) => carId !== id)
      : [...selectedCars, id];
    setSelectedCars(newSelectedCars);
  };

  const handleSort = (event) => {
    const [key, value] = event.target.value.split("-");
    setSortKey(key);
    setSortValue(value);
    setPage(1);
  };


  const handleDeleteDB = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa vĩnh viễn chiếc xe này?")) {
      try {
        const result = await deleteDB(id);
        alert(result.message);  // Hiển thị thông báo từ server
  
        // Cập nhật lại danh sách xe hoặc trạng thái UI sau khi xóa thành công
        setCars(cars.filter(car => car._id !== id));  // Cập nhật lại danh sách xe
      } catch (error) {
        alert("Có lỗi xảy ra khi xóa xe!");
        console.error(error);
      }
    }
  };

  const handleBulkDelete = async () => {
    if (
      selectedCars.length > 0 &&
      window.confirm("Are you sure you want to delete selected cars?")
    ) {
      try {
        await bulkDeleteCars(selectedCars);
        setCars(cars.filter((car) => !selectedCars.includes(car._id)));
        setSelectedCars([]);
      } catch (err) {
        setError("Failed to delete selected cars.");
      }
    }
  };


  const handleUndoBulkDeleted = async () => {
    if (
      selectedCars.length > 0 &&
      window.confirm("Bạn có muốn khôi phục các xe được chọn không?")
    ) {
      try {
        const result = await UndobulkDeleteCars(selectedCars);
        if(result.code === 200) {
          alert(result.message);
        } else {
          alert("Khôi phục xe thất bại.");
        }
        setCars(cars.filter((car) => !selectedCars.includes(car._id)));
        setSelectedCars([]);
      } catch (err) {
        setError("Failed to restore selected cars.");
      }
    }
  };

  const handleUndoDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn khôi phục lại chiếc xe này?")) {
      try {
        const result = await undoDeleteCar(id);
        alert(result.message);  // Hiển thị thông báo từ server
        
        // Cập nhật lại danh sách xe hoặc trạng thái UI sau khi hoàn tác thành công
        setCars(cars.map(car => {
          if (car._id === id) {
            car.deleted = false;  // Khôi phục lại trạng thái deleted thành false
          }
          return car;
        }));

        window.location.reload();
      } catch (error) {
        alert("Có lỗi xảy ra khi khôi phục xe!");
        console.error(error);
      }
    }
  };

  const handleOpenModal = async (id) => {
    try {
      const carDetail = await getCarDetail(id); // Gọi API lấy chi tiết xe
      setSelectedCar(carDetail); // Cập nhật state để hiển thị trong modal
      setModalOpen(true); // Mở modal
    } catch (error) {
      console.error("Lỗi khi lấy thông tin chi tiết xe:", error);
    }
  };
  

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCar(null);
  };


  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container className="mt-4">
      <div className="card mb-3">
        <div className="card-header">
          <h2>Danh sách xe</h2>
        </div>
        <div className="card-body">
          {/* Bộ lọc và khôi phục, xóa đã chọn */}
          <div className="mb-3">
            <div class="row">
              <div class="col-3">
                <Select onChange={handleSort} defaultValue="">
                  <MenuItem value="" selected>
                    <em>Mặc định</em>
                  </MenuItem>
                  <MenuItem value="brand-asc">Hãng xe (A-Z)</MenuItem>
                  <MenuItem value="brand-desc">Hãng xe (Z-A)</MenuItem>
                  <MenuItem value="price-asc">Giá (Thấp đến Cao)</MenuItem>
                  <MenuItem value="price-desc">Giá (Cao đến Thấp)</MenuItem>
                </Select>
                {selectedCars.length > 1 && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleUndoBulkDeleted}
                    style={{ marginLeft: "10px" }}
                  >
                    Restore ALL
                  </Button>
                )}
              </div>
              <div className="col-7">
                <form
                  onSubmit={handleSearch}
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <FormControl
                    fullWidth
                    variant="outlined"
                    style={{ marginBottom: "16px", flex: "1" }}
                  >
                    <InputLabel>Tìm kiếm theo</InputLabel>
                    <Select
                      value={searchKey}
                      onChange={(e) => setSearchKey(e.target.value)}
                      label="Tìm kiếm theo"
                    >
                      <MenuItem value="brand">Hãng xe</MenuItem>
                      <MenuItem value="name">Tên xe</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Nhập từ khóa"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{ marginBottom: "16px", flex: "3" }}
                    InputProps={{
                      endAdornment: (
                        <button
                          type="submit"
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      ),
                    }}
                  />
                </form>
              </div>
            </div>
          </div>

          {/* Bảng dữ liệu */}
          <Table
            className="table table-hover table-sm"
            style={{ tableLayout: "fixed", width: "100%" }}
          >
            <thead className="thead-dark">
              <tr>
                <th
                  style={{
                    width: "5%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Checkbox
                    checked={selectedCars.length === cars.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th
                  style={{
                    width: "5%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  STT
                </th>
                <th
                  style={{
                    width: "15%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  Hình ảnh
                </th>
                <th
                  style={{
                    width: "10%",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  Hãng xe
                </th>
                <th
                  style={{
                    width: "10%",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  Tên xe
                </th>
                <th
                  style={{
                    width: "15%",
                    textAlign: "left",
                    verticalAlign: "middle",
                  }}
                >
                  Phiên bản
                </th>
                <th
                  style={{
                    width: "10%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  Giá
                </th>
                <th
                  style={{
                    width: "25%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <TableRow key={car._id}>
                  <TableCell
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    <Checkbox
                      checked={selectedCars.includes(car._id)}
                      onChange={() => handleSelectOne(car._id)}
                    />
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {(page - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    <img
                      src={car.imageUrl[0] || "placeholder.jpg"}
                      alt={car.name}
                      style={{ width: "100px", borderRadius: "5px" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left", verticalAlign: "middle" }}
                  >
                    {car.brand}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left", verticalAlign: "middle" }}
                  >
                    {car.name}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left", verticalAlign: "middle" }}
                  >
                    {car.version}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "left", verticalAlign: "middle" }}
                  >
                    {car.price}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    <Button
                        class="btn btn-success"
                        variant="contained"
                        onClick={() => handleUndoDelete(car._id)} // Gọi hàm handleUndoDelete khi nhấn nút
                        style={{ marginRight: "5px" }}
                    >
                        Hoàn tác
                    </Button>
                    <Button
                        class="btn btn-danger"
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteDB(car._id)} // Gọi hàm handleDeleteDB khi nhấn nút
                    >
                        Xóa vĩnh viễn
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          {/* Modal hiển thị chi tiết */}
          <CarDetailModal
            open={modalOpen}
            onClose={handleCloseModal}
            carDetail={selectedCar}
          />

          {/* Phân trang */}
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            className="mt-3"
          />
        </div>
      </div>
    </Container>
  );
};

export default Deleted;
