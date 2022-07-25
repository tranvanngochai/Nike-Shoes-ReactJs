import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Airmax DH1592-100 Nữ",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/276893/giay-lifestyle-nu-nike-w-air-max-97-dh1592-100-190422-021820-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Air Max DC9332-001 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280878/product-280878-060722-094105-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 30,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike CW1648-100 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280853/giay-lifestyle-nam-nike-air-max-genome-cw1648-100-060722-050524-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Airmax CV6897 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/260516/nike-air-max-zm950-cv6897-nam-thumb-1-2-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike CT2357-007 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/276751/giay-chay-bo-nam-nike-react-infinity-run-fk-2-ct2357-007-010522-074218-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike CI9923-005 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280849/giay-chay-bo-nam-nike-air-zoom-tempo-next-fk-ci9923-005-300622-054343-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 20,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike DC9394-001 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280879/giay-lifestyle-nam-nike-air-vapormax-2021-fk-dc9394-001-060722-101736-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Nike DH4084-100 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280882/giay-lifestyle-nam-nike-air-vapormax-2021-fk-dh4084-100-050722-024733-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 40,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Nike CT2228-103 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280850/giay-chay-bo-nam-nike-zoomx-invincible-run-fk-ct2228-103-060722-100511-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Nike DH2497-600 Nữ",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/276894/giay-chay-bo-nu-nike-w-react-infinity-run-fk-2-prm-dh2497-600-190422-022733-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Nike CT2392-005 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/280851/giay-chay-bo-nam-nike-zoom-fly-4-ct2392-005-050722-031059-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Nike CT2357-006 Nam",
                "src": "https://cdn.tgdd.vn/Products/Images/9980/276750/giay-chay-bo-nam-nike-react-infinity-run-fk-2-ct2357-006-010522-073207-600x600.jpg",
                "description": "Giày Chạy Bộ Nam Nữ Nike",
                "content": "Nike cung cấp đa dạng các sản phẩm như giày thể thao, quần áo thể thao, dụng cụ, thiết bị và phụ kiện thể thao, được chia theo 8 dòng riêng, bao gồm bóng rổ, bóng đá, chạy bộ, Jordan, đồ tập cho nam, đồ tập cho nữ, thời trang thể thao và đồ tập cho trẻ.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
        ],
        cart: [],
        total: 0

    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
        }
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
        }

    };

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    };

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }
    }


    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider
                value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


