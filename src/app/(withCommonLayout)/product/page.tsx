"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
type TProduct = {
  _id: string;
  name: string;
  price: string;
  images: string;
  description: string;
  brands: string;
  rating: number;
};

const Product = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const priceCheckbox = [
    { id: 1, brand: "walton" },
    { id: 2, brand: "pixel" },
    { id: 3, brand: "sony" },
    { id: 4, brand: "samsung" },
    { id: 5, brand: "nokia" },
  ];
  // filtering

  const ratingCheckbox = [
    { id: 1, rating: "1" },
    { id: 2, rating: "2" },
    { id: 3, rating: "3" },
    { id: 4, rating: "4" },
    { id: 5, rating: "5" },
  ];
  const priceRanges = [
    { id: 1, min: 0, max: 5000, label: " $5000" },
    { id: 2, min: 5000, max: 10000, label: "$5000 - $10000" },
    { id: 3, min: 10000, max: 20000, label: "$10000 - $20000" },
    { id: 4, min: 20000, max: 30000, label: "$20000 - $30000" },
  ];

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://techedge-server.vercel.app/api/v1/all-products",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const toggleBrandSelection = (brand: string) => {
    setSelectedBrands((prevBrands) => {
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((item) => item !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  };

  const toggleRatingSelection = (rating: string) => {
    setSelectedRatings((prevRatings) => {
      if (prevRatings.includes(rating)) {
        return prevRatings.filter((item) => item !== rating);
      } else {
        return [...prevRatings, rating];
      }
    });
  };

  const togglePriceRangeSelection = (range: { min: number; max: number }) => {
    if (
      selectedPriceRange &&
      selectedPriceRange.min === range.min &&
      selectedPriceRange.max === range.max
    ) {
      setSelectedPriceRange(null); // Deselect if already selected
    } else {
      setSelectedPriceRange(range); // Select the range
    }
  };

  // Function to check if a price range is selected
  const isPriceRangeSelected = (range: { min: number; max: number }) => {
    if (selectedPriceRange) {
      return (
        selectedPriceRange.min === range.min &&
        selectedPriceRange.max === range.max
      );
    }
    return false;
  };

  const isBrandSelected = (brand: string) => {
    return selectedBrands.includes(brand);
  };

  const isRatingSelected = (rating: string) => {
    return selectedRatings.includes(rating);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brands)) {
      return false;
    }
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.includes(String(product.rating))
    ) {
      return false;
    }
    if (selectedPriceRange) {
      // Convert product price to number for comparison
      const price = parseFloat(product.price);
      return price >= selectedPriceRange.min && price <= selectedPriceRange.max;
    }
    return true;
  });

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-6 mr-6 mt-14">
      {/* filter section */}

      <div className="col-span-1 ml-14">
        <h1 className="text-[18px] font-bold pb-4 ">Filtering here</h1>
        <h1 className="pb-2">Brand</h1>
        {priceCheckbox?.map((check) => (
          <h1
            key={check.id}
            className="flex gap-6 text-[18px] items-center cursor-pointer"
            onClick={() => toggleBrandSelection(check.brand)}
          >
            <ChevronDown />
            <span className={isBrandSelected(check.brand) ? "font-bold" : ""}>
              {check.brand}
            </span>
          </h1>
        ))}
        <h1 className="pb-4 mt-8">Rating</h1>
        {ratingCheckbox?.map((check) => (
          <h1
            key={check.id}
            className="flex gap-6 text-[18px] items-center cursor-pointer"
            onClick={() => toggleRatingSelection(check?.rating)}
          >
            <ChevronDown />
            <span
              className={
                isRatingSelected(check.rating)
                  ? "font-bold"
                  : "flex items-center gap-2"
              }
            >
              {check.rating} <Star size={16} />
            </span>
          </h1>
        ))}

        <h1 className="pb-4 mt-8">Price</h1>
        {priceRanges.map((range) => (
          <h1
            key={range.id}
            className={`flex gap-6 text-[12px] items-center cursor-pointer ${
              isPriceRangeSelected(range) ? "font-bold" : ""
            }`}
            onClick={() => togglePriceRangeSelection(range)}
          >
            <ChevronDown />
            <span>{range.label}</span>
          </h1>
        ))}
      </div>

      {/*  product show section */}
      <div className="col-span-5 ml-6">
        <h1 className="text-2xl pb-8 font-bold ">Our All Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product: TProduct) => (
            <div key={product._id}>
              <Link href={`/product/${product._id}`}>
                <div className="pb-4 rounded-md shadow-xl shadow-[#050508] dark:text-gray-100">
                  <Image src={product.images} alt="" height={500} width={400} />
                  <div className="mt-4 mb-6 ">
                    <h2 className="text-[24px] font-semibold">
                      {product.name}
                    </h2>
                    <p className="dark:text-gray-100">{product.description}</p>
                    <p className="dark:text-gray-100">price: {product.price}</p>
                    <p className="dark:text-gray-100">import: 12-06-2024</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
