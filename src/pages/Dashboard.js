import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  Paper,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineTooltip,
  ResponsiveContainer,
} from "recharts";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
} from "recharts";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { fetchCars } from "../api/carApi";

const colors = [
  "#FF6F61", "#4CAF50", "#2196F3", "#FFEB3B", "#9C27B0",
  "#F44336", "#00BCD4",
];

const Dashboard = () => {
  const [carData, setCarData] = useState([]);
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Load car data by segment
  useEffect(() => {
    const fetchCarCountBySegment = async () => {
      try {
        const response = await Axios.get("http://localhost:3000/api/car_items/count_by_segment");
        setCarData(response.data);
      } catch (error) {
        setError("Không thể tải dữ liệu.");
      } finally {
        setLoading(false);
      }
    };
    fetchCarCountBySegment();
  }, []);

  // Load car list
  useEffect(() => {
    const loadCars = async () => {
      try {
        const carData = await fetchCars(1, "price", "asc");
        setCars(carData.cars || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    loadCars();
  }, []);

  const totalCarCount = carData.reduce((sum, segment) => sum + segment.count, 0);

  const lineChartData = carData.map((item) => ({
    vehicle_segment: item.vehicle_segment,
    count: item.count,
  }));

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedCars(cars.map((car) => car._id));
    } else {
      setSelectedCars([]);
    }
  };

  const handleSelectOne = (carId) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter((id) => id !== carId));
    } else {
      setSelectedCars([...selectedCars, carId]);
    }
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
    <Container>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "30px" }}>
        Car Management Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
        Tổng số xe: <strong style={{ color: "red" }}>{totalCarCount}</strong>
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: "400px" }}>
            <Typography variant="h6" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
              <strong>Số lượng xe theo phân khúc</strong>
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={carData}
                  dataKey="count"
                  nameKey="vehicle_segment"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                  label
                >
                  {carData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <PieTooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: "400px" }}>
            <Typography variant="h6" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
              <strong>Xu hướng số lượng xe theo phân khúc</strong>
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="vehicle_segment" />
                <YAxis />
                <LineTooltip />
                <Line type="monotone" dataKey="count" stroke="#FF6F61" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
