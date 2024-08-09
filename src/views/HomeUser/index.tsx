import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  Typography,
  Avatar,
  Paper,
  Button,
  Grid,
} from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { firebaseauthDTO } from "../../server/dto/firebaseAuthDTO";
import {
  BLACK_DAYS,
  FEATURED_PRODUCTS,
  NEW,
  RECOMMENDED_PRODUCTS,
} from "../../constants/routes";
import { Link } from "react-router-dom";
import { Item } from "../../styles/styleMUI";

import * as XLSX from "xlsx";
import { categories } from "../../constants/order";
const itemData: DataItem[] = [
  {
    id: "a1",
    name: "imageunsplash1",
    category: "cat1",
    subcategory: "subcat1",
    price: 3000,
    img: "src/static/images/banner/b2b.jpg",
  },
  {
    id: "a1",
    name: "imageunsplash3",
    category: "cat3",
    subcategory: "subcat1",
    price: 3000,
    img: "src/static/images/banner/app-online-store.gif",
  },
  {
    id: "a1",
    name: "imageunsplash2",
    category: "cat2",
    subcategory: "subcat1",
    price: 3000,
    img: "src/static/images/banner/11.png",
  },
];

interface DataItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  img: string;
}

const HomeUser = ({
  user,
  setUser,
  featuredProducts,
  setFeaturedProducts,
  products,
  setProducts,
}: any) => {
  const [value, setValue] = React.useState<number>(0);

  const [fileProducts, setFileProducts] = useState<File[] | null>([]);
  const [dataProducts, setDataProducts] = useState<DataItem[]>(itemData);
  const [ruleta, setRuleta] = useState([
    { header: "Más vendidos", state: true, link: FEATURED_PRODUCTS },
    { header: "Top 5 estrellas", state: false, link: RECOMMENDED_PRODUCTS },
    { header: "blackDay", state: false, link: BLACK_DAYS },
    { header: "Nuevos", state: false, link: NEW },
  ]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      if (selectedFiles.length > 3) {
        alert("Solo se permiten hasta 3 imágenes.");
        return;
      }

      const filesArray = Array.from(selectedFiles);
      const newDataProducts = [...dataProducts];

      for (let i = 0; i < filesArray.length; i++) {
        const file = filesArray[i];
        const reader = new FileReader();

        reader.onloadend = () => {
          const dataURL = reader.result as string;

          // Actualiza el dataProducts con el dataURL
          newDataProducts[i] = {
            ...newDataProducts[i],
            img: dataURL,
          };

          console.log(`Imagen ${i + 1}:`, dataURL);
          setDataProducts(newDataProducts);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChangeProducts = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const arrayBuffer = e.target.result as ArrayBuffer;
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          const [headers, ...rows] = jsonData as any[];
          const processedData = rows.map((row: any[]) => ({
            id: row[0] || "",
            name: row[1] || "",
            category: row[2] || "",
            subcategory: row[3] || "",
            price: row[4] || 0,
            img: row[5] || "",
          }));
          setDataProducts(processedData);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSave = () => {
    fileProducts?.map((fileProduct, item) => {
      console.log(fileProduct);
    });
  };

  return (
    <Container className="content-user" maxWidth="md">
      <Paper>
        <Tabs value={value} onChange={handleChange} aria-label="home tabs">
          <Tab label="Perfil" />
          <Tab label="Pestaña 1" />
          <Tab label="Pestaña 2" />
          <Tab label="Pestaña 3" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {value === 0 && (
            <Box>
              <Typography variant="h4" gutterBottom>
                Datos de Usuario
              </Typography>
              <Box display="flex" alignItems="center">
                <Avatar
                  alt="Usuario"
                  src="https://via.placeholder.com/150"
                  sx={{ width: 100, height: 100, mr: 2 }}
                />
                <Typography variant="h6">Nombre del Usuario</Typography>
              </Box>
              <Typography variant="body1" mt={2}>
                Aquí van los datos del usuario, como el nombre completo,
                dirección de correo electrónico, etc.
              </Typography>
            </Box>
          )}
          {value === 1 && (
            <Typography variant="body1">
              <h1>Productos</h1>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item lg={2} md={2} xs={12}>
                    <Item>
                      <input
                        accept="image/*"
                        style={{ display: "none", width: "100%" }}
                        id="upload-files"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                      />
                      <label style={{ width: "100%" }} htmlFor="upload-files">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                          fullWidth
                        >
                          Cargar Imágenes
                        </Button>
                      </label>

                      <input
                        accept=".xlsx, .xls"
                        style={{ display: "none", width: "100%" }}
                        id="upload-excel"
                        type="file"
                        onChange={handleFileChangeProducts}
                      />
                      <label style={{ width: "100%" }} htmlFor="upload-excel">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                          fullWidth
                        >
                          Cargar Excel
                        </Button>
                      </label>

                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        fullWidth
                        onClick={handleSave}
                      >
                        Guardar datos
                      </Button>
                    </Item>
                  </Grid>
                  <Grid item lg={10} md={10} xs={12}>
                    <Item>
                      <ImageList
                        variant="masonry"
                        cols={3}
                        gap={8}
                        sx={{ width: "100%", height: 300 }} // Ajusta la altura fija aquí
                      >
                        {dataProducts.map((item) => (
                          <ImageListItem
                            key={item.img}
                            sx={{
                              height: 300,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={item.img}
                              alt={item.name}
                              loading="lazy"
                              style={{
                                height: "200px",
                                width: "auto",
                                objectFit: "contain", // Ajusta la imagen dentro del contenedor sin recortarla
                              }}
                            />
                            <ImageListItemBar
                              title={item.name}
                              subtitle={<span>by: {item.name}</span>}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          )}
          {value === 2 && (
            <Typography variant="body1">Contenido de la Pestaña 2</Typography>
          )}
          {value === 3 && (
            <Typography variant="body1">Contenido de la Pestaña 3</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default HomeUser;
