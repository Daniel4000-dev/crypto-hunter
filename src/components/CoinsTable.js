import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { Container, createTheme, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core';

function CoinsTable() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState()

    const { currency } = CryptoState();

    const fetchCoins = async () => {
        setLoading(true)
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);
    };

    console.log(coins);

    useEffect(() => {
        fetchCoins()
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

  return (
    <ThemeProvider theme={darkTheme} >
        <Container style={{ textAlign: 'center'}}>
            <Typography
                variant="h4"
                style={{ margin: 18, fontFamily: "Montserrat" }}
            >
                CryptoCurrency Prices by Market Cap
            </Typography>

            <TextField 
                label="Search for a Crypto Currency.." 
                variant="outlined" 
                style={{ marginBottom: 20, width: "100%" }}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer>
                {
                    loading ? (
                        <LinearProgress style={{ backgroundColor: "gold" }} />
                    ) : (
                            <Table>
                                <TableHead style={{ backgroundColor: '#EEBC1D'}}>
                                    <TableRow>
                                        {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                            <TableCell
                                                style={{
                                                    color: "black",
                                                    fontWeight: "700",
                                                    fontFamily: "Montserrat",
                                                }}
                                                key={head}
                                                align={head === "coin" ? "" : "right"}
                                                >
                                                    {head}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    
                                </TableBody>
                            </Table>
                    )
                }
            </TableContainer>
        </Container>
    </ThemeProvider>
  )
}

export default CoinsTable