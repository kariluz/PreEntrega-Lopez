import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProduct = ({product}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={`/src/assets/img/${product.imagen}`}
            alt=""
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {product.categoria}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.motivo}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions>
        </Card>
    );
    }

export default CardProduct