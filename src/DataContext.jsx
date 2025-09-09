import React, { createContext, useRef, useState, useEffect } from "react";
import { AllData, TrendingProductData } from "./AllProductsData";
import TrendingProductsSlider from "./components/TrendingProductsSlider";

export const ShopContext = createContext();
const DataContext = ({ children }) => {
  const combineAllCategoryProduct = [
    ...AllData.bath,
    ...AllData.bed,
    ...AllData.trendingProduct,
    ...AllData.productCollection,
    ...AllData.offer,
  ];

  const setDataInSessionStorage = (key, value) => {
    sessionStorage.setItem(`${key}`, JSON.stringify(value));
  };

  const getDataFromSessionStorage = (key) => {
    let data = sessionStorage.getItem(key);
    try {
      data = JSON.parse(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTkyNywidHlwZSI6InByb2Zlc3Npb25hbCIsImlhdCI6MTc1NTg2ODk0NX0.s5EoZ8wyK2A8cCqXZQT5IIGcNGPYQFzJj8sXfYid-ZE-eKUFYM81J2CeMimNeKFKfwwATmsL0aOgo-iRGOmTy7u36_yzsCcuxL-xSRZOkDjMsrIxR-NCUMnLywBRg7fV_kcZVCf-ivP--w3gJaEOq9dxItUbaYoiO88D4sk65dcNuToNlH0kzJdnwOA_z35rhMkEOeEpgI3aDdVdceDXObr91Ge41OD02-FGQklk_tZbfj1mItKPoj8nvDH5rlvt6Zz-fD44xE1ZkBSFvAUAjv5Kk7VlDvtByBakSYB-r1NbTSBImAbtUDiIcUCd0Km4ksCMjYskv_ZQVGnm_qHhlZTV1o_KI_XwaP817H13Ys3rA7tZY2-2Xc8oiAIFjIlTdKTqGN46CO3ErcNUOjDuDQGNnTX6lyF2uRxbcA9VSHjsEEPQtnk3oJL5_SGuVAlLD32Zkr7Mb1NmqrqBfw5jZ-fNFseRMSe9ud4mOLu_K2QUTu69S9DfGKeqQupRwkYhmSrOD3QLvLtviLrIMw_-VpCmy1bbBGyNb704v2iHaAiOwjGIgbdrfKDqk5_J-TD-VFEKr-JhSQVuB3YNqtE8bSSygibUI9PKL18O9X15Of7j5z29dKy8R3n-cSYH2Cn9QQNmfxv-ccidK21rVQ461fiiFAFeW4mK0oYvbyXnMfU";
  const lowestPriceRef = useRef("");
  const HighestPriceRef = useRef("");
  // all popups
  const [ShowPopUptoLogOut, setShowPopUptoLogOut] = useState(false);
  const [ShowPopUpToBuyProduct, setShowPopUpToBuyProduct] = useState(false);
  const [ShowPopUpForDuplicateProduct, setShowPopUpForDuplicateProduct] =
    useState(false);
  const [ISProductISDuplcate, setISProductISDuplcate] = useState(false);
  const [DisableAddTOCartButton, setDisableAddTOCartButton] = useState(false);
  /// delete account states
  const [isUserHaveAccount, setIsUserHaveAccount] = useState(() => {
    return JSON.parse(localStorage.getItem("isUserHaveAccount")) || false;
  });

  ///
  const [IsAllProductsSelected, setIsAllProductsSelected] = useState(false);
  const [AddProductInOrdersummary, setAddProductInOrdersummary] = useState([]);
  const [orderPorductImage, setorderPorductImage] = useState(null);
  const [AllProductsInOrdersummary, setAllProductsInOrdersummary] = useState(
    new Map()
  );
  const [totalBIll, settotalBIll] = useState(0);
  const [count, setcount] = useState(0);
  const [totalItems, settotalItems] = useState(0);
  const [productInCart, setproductInCart] = useState(new Map());
  const [Start, setStart] = useState(
    () => getDataFromSessionStorage("start") || 0
  );
  const [RemovedProductID, setRemovedProductID] = useState(null);
  const [
    ShowSelectedProductOnAddToCartPage,
    setShowSelectedProductOnAddToCartPage,
  ] = useState(null);

  const [end, setend] = useState(() => getDataFromSessionStorage("end") || 5);

  const [TrendingProductSLice, setTrendingProductSLice] = useState(
    TrendingProductData.slice(Start, end)
  );

  const [showProduct, setshowProduct] = useState(
    combineAllCategoryProduct.slice(0, 9)
  );

  const [singleproductCount, setsingleproductCount] = useState({ count: 1 });
  //open singUpForm and clsoe signup form
  const [IsOpenSignUPForm, setIsOpenSignUPForm] = useState(false);
  const [openForm, setopenForm] = useState(false);

  //state for forms
  const [isValidName, setisValidName] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassWord, setisValidPassWord] = useState(true);
  const [ISOpenEye, setISOpenEye] = useState(false);
  const [IsOpenLoginEye, setIsOpenLoginEye] = useState(false);
  const [IsValidLoginEmail, setIsValidLoginEmail] = useState(true);
  const [ISValidLoginPassword, setISValidLoginPassword] = useState(true);
  const [IsAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
    } catch {
      return false;
    }
  });

  const openSignUpForm = () => {
    setIsOpenSignUPForm(true);
  };
  const closeSignUpForm = () => {
    setIsOpenSignUPForm(false);
  };

  const showForm = () => {
    setopenForm(true);
  };

  const closeform = () => {
    setopenForm(false);
  };

  const openEye = () => {
    setISOpenEye(true);
  };
  const closeEye = () => {
    setISOpenEye(false);
  };

  const openLoginEye = () => {
    setIsOpenLoginEye(true);
  };
  const closeLogineye = () => {
    setIsOpenLoginEye(false);
  };
  ///validation of signup Form
  const emailref = useRef("");
  const userNameRef = useRef("");
  const passWordRef = useRef("");
  const LoginEmailRef = useRef("");
  const loginPasswordRef = useRef("");
  const requiredUsername =
    /^(?=.{3,20}$)(?![_. -])(?!.*[_. -]{2})(?!.*[_. -]$)[a-zA-Z0-9._ -]+$/;

  const requiredEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const requiredPAss =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[._@!#$%-])[A-Za-z0-9._@!#$%-]{8,20}$/;
  const checkloginData = () => {};

  const isLoginDataISValid = () => {
    const emailKey = LoginEmailRef.current.value.trim();
    const passwordKey = loginPasswordRef.current.value.trim();

    const storedEmail = JSON.parse(localStorage.getItem("email"));
    const storedPassword = JSON.parse(localStorage.getItem("password"));

    if (storedEmail !== emailKey) {
      setIsValidLoginEmail(false);
    } else {
      setIsValidLoginEmail(true);
    }

    if (storedPassword !== passwordKey) {
      setISValidLoginPassword(false);
    } else {
      setISValidLoginPassword(true);
    }
    console.log("IsA888888icated", IsAuthenticated);

    if (storedEmail === emailKey && storedPassword === passwordKey) {
      console.log(" Successfully signed in");
      console.log("IsAut-----cated", IsAuthenticated);
      localStorage.setItem("token", JSON.stringify(token));

      LoginEmailRef.current.value = "";
      loginPasswordRef.current.value = "";
      setIsValidLoginEmail(true);
      setISValidLoginPassword(true);

      setIsAuthenticated(true);
    } else {
      console.log("IsAuthenticated", IsAuthenticated);
      setIsAuthenticated(false);
      console.log(" Wrong credentials");
    }
  };

  const checkemail = () => {
    if (!requiredEmail.test(String(emailref.current.value))) {
      setisValidEmail(false);
    } else {
      setisValidEmail(true);
    }
  };
  const checkUserName = () => {
    if (!requiredUsername.test(String(userNameRef.current.value))) {
      setisValidName(false);
    } else {
      setisValidName(true);
    }
  };
  const checkPassWord = () => {
    if (!requiredPAss.test(String(passWordRef.current.value))) {
      setisValidPassWord(false);
    } else {
      setisValidPassWord(true);
    }
  };

  const storeformData = () => {
    if (userNameRef.current.value == "") {
      setisValidName(false);
    }
    if (emailref.current.value == "") {
      setisValidEmail(false);
    }
    if (passWordRef.current.value == "") {
      setisValidPassWord(false);
    } else if (isValidEmail && isValidName && isValidPassWord) {
      localStorage.setItem(
        "username",
        JSON.stringify(userNameRef.current.value)
      );
      localStorage.setItem("email", JSON.stringify(emailref.current.value));
      localStorage.setItem(
        "password",
        JSON.stringify(passWordRef.current.value)
      );
      userNameRef.current.value = "";
      emailref.current.value = "";
      passWordRef.current.value = "";
      setIsOpenSignUPForm(false);
      setIsUserHaveAccount(true);
      console.log("acount truee");
    } else {
      return;
    }
  };

  //update count in addToCart
  const increaseCount = () => {
    setsingleproductCount({
      ...singleproductCount,
      count: singleproductCount.count + 1,
    });
  };

  const decreasecount = () => {
    setsingleproductCount({
      ...singleproductCount,
      count:
        singleproductCount.count >= 2
          ? singleproductCount.count - 1
          : singleproductCount.count,
    });
  };
  const setdefaultCountToOne = () => {
    setsingleproductCount({ ...singleproductCount, count: 1 });
  };

  const [InputValue, setInputValue] = useState("");

  //single  product for add to cart page cart
  const SetAddtocartSelectedProduct = (product) => {
    if (productInCart.has(product.id)) {
      setISProductISDuplcate(true);
      setDisableAddTOCartButton(true);
    } else {
      setISProductISDuplcate(false);
      setDisableAddTOCartButton(false);
    }
    setShowSelectedProductOnAddToCartPage(product);
  };
  const inputChecked = useRef({});
  const selectAlItemsInput = useRef("");
  const setPriceValue = () => {
    const low = Number(lowestPriceRef.current.value) || 0;
    const high = Number(HighestPriceRef.current.value) || Infinity;

    filterProductsByPrice(low, high);
  };

  const filterProductsByPrice = (low, high) => {
    const filtered = combineAllCategoryProduct.filter(
      (product) => product.price >= low && product.price <= high
    );
    setshowProduct(
      filtered.length > 0 ? filtered : combineAllCategoryProduct.slice(0, 9)
    );
  };

  const debounce = (fn, delay) => {
    let timer;
    return (...arg) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...arg);
      }, delay);
    };
  };

  const SearchFucntion = (inputRef) => {
    setInputValue(inputRef.current.value);
    console.log(InputValue);
  };

  const debounceSearch = debounce(SearchFucntion, 50);

  const filterProductOFInputValue = combineAllCategoryProduct.filter(
    (product) => {
      return (
        product.name
          .toLocaleLowerCase()
          .includes(InputValue.toLocaleLowerCase()) || false
      );
    }
  );

  const setFilteredProductsToShowProducts = () => {
    if (filterProductOFInputValue.length > 0) {
      setshowProduct(filterProductOFInputValue);
    }
  };

  const filterProductsByCategory = (category) => {
    setshowProduct(category);
  };

  const inputRef = useRef("");

  const bedAndBathref = useRef(null);
  const bathAndBodyref = useRef(null);
  const salesAndDiscountref = useRef(null);
  const trendingProductsref = useRef(null);

  const sectionRef = {
    bedAndBath: bedAndBathref,
    bathAndBody: bathAndBodyref,
    salesAndDiscount: salesAndDiscountref,
    trendingProducts: trendingProductsref,
  };

  const handleToScroll = (ref) => {
    if (ref) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const increaseStartlimit =
    TrendingProductData.length - 1 - (TrendingProductSLice.length - 1);
  const decreseEndLimit =
    TrendingProductData.length - 1 - (TrendingProductSLice.length - 1);

  const increase = () => {
    if (Start < increaseStartlimit && end < TrendingProductData.length - 1) {
      setStart((start) => start + 1);
      setend((end) => end + 1);
    }
  };

  const decrease = () => {
    if (Start > 0 && end >= decreseEndLimit) {
      setStart((start) => start - 1);
      setend((end) => end - 1);
    }
  };

  const ShowAllOfProducts = () => {
    setshowProduct(
      combineAllCategoryProduct.slice(0, combineAllCategoryProduct.length)
    );
  };
  const showlessproduct = () => {
    setshowProduct(combineAllCategoryProduct.slice(0, 9));
  };

  const AddProductInTOCart = (newProduct) => {
    setproductInCart((prevcart) => {
      if (prevcart.has(newProduct.id)) {
        console.log("this product is already in the cart");
        console.log(prevcart.size);
        const newcart = new Map(prevcart);

        const getprevProduct = newcart.get(newProduct.id);
        const getprevcount = getprevProduct.count;
        console.log("getprevCount", getprevcount);

        newcart.set(newProduct.id, {
          newproduct: newProduct,
          count: singleproductCount.count + getprevcount,
        });

        return newcart;
      } else {
      }
      const newcart = new Map(prevcart);

      newcart.set(newProduct.id, {
        newproduct: newProduct,
        count: singleproductCount.count,
      });

      return newcart;
    });
  };

  const unSelectOther = (id, e) => {
    const checkboxes = inputChecked.current;

    if (IsAllProductsSelected) {
      e.target.checked = true;
      return;
    }
    if (IsAllProductsSelected) {
      e.target.checked = true;
      return;
    }

    if (e.target.checked) {
      const keys = Object.keys(checkboxes);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const el = checkboxes[key];
        if (el == null) continue;

        if (key !== String(id)) {
          el.checked = false;
        }
      }
    }
  };

  const removeProductFromCart = (id) => {
    setproductInCart((prevcart) => {
      if (!prevcart.has(id)) return prevcart;

      const isThisChecked = inputChecked?.current[id]?.checked || false;

      if (IsAllProductsSelected) {
        console.log("All products are selected — delete single not allowed");

        return prevcart;
      }

      if (isThisChecked) {
        const newCart = new Map(prevcart);
        newCart.delete(id);
        return newCart;
      }

      return prevcart;
    });
  };

  const IncreaseItemsInProductsSummmary = (id) => {
    setproductInCart((prevcart) => {
      if (!prevcart.has(id)) {
        return prevcart;
      }

      const newCart = new Map(prevcart);
      const obj = newCart.get(id);

      newCart.set(id, { ...obj, count: obj.count + 1 });

      return newCart;
    });
  };

  const DecreaseItemsInProductsSummmary = (id) => {
    setproductInCart((prevcart) => {
      if (!prevcart.has(id)) {
        return prevcart;
      }

      const newCart = new Map(prevcart);
      let obj = newCart.get(id);
      newCart.set(id, {
        ...obj,
        count: obj.count >= 2 ? obj.count - 1 : obj.count,
      });
      return newCart;
    });
  };
  console.log(inputChecked, "inputCheckedinputChecked");

  const checkISSelectedAll = () => {

  };

  const selectAllProducts = () => {
    const checkboxes = Object.values(inputChecked.current);

    if (checkboxes.length === 0) return;

    let allSelected = true;

    if (productInCart.size == 1) {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] == null) {
          continue;
        }
        if (checkboxes[i].checked && IsAllProductsSelected) {
          checkboxes[i].checked = !allSelected;
          setIsAllProductsSelected(false);
          return;
        } else {
          checkboxes[i].checked = allSelected;
          setIsAllProductsSelected(allSelected);
          return;
        }
      }
    }
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] == null) {
        continue;
      }
      if (!checkboxes[i].checked) {
        allSelected = false;
        console.log("allselected", allSelected);

        break;
      }
    }

    console.log(allSelected);

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] == null) {
        continue;
      }
      console.log("allselected", allSelected);

      checkboxes[i].checked = !allSelected;
    }
    setIsAllProductsSelected(!allSelected);
  };

  const removeAllProductFromCart = () => {
    let isSelectedAll = true;
    const checkboxes = Object.values(inputChecked.current);
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] == null) {
        continue;
      }
      if (!checkboxes[i].checked) {
        isSelectedAll = false;
        break;
      }
    }
    if (
      selectAlItemsInput.current.checked &&
      productInCart.size > 0 &&
      isSelectedAll
    ) {
      setproductInCart(new Map());
      selectAlItemsInput.current.checked = false;
    }
  };

  // order summarys fucntions

  const showPopUp = () => {
    setShowPopUpToBuyProduct(true);
  };
  const closePopup = () => {
    setShowPopUpToBuyProduct(false);
  };
  ///log out popUp
  const showLogoutPopUp = () => {
    setShowPopUptoLogOut(true);
  };

  const closeLogoutPopup = () => [setShowPopUptoLogOut(false)];
  const getProductformMap = (id, product) => {
    setorderPorductImage([id, product]);
    return [id, product];
  };

  /// pop of duplicate products

  const closePopUpOfDuplicateProduct = () => {
    setISProductISDuplcate(false);
  };

  const setSelectedProductInOrdersummary = () => {
    setAddProductInOrdersummary(orderPorductImage);
    removeAddedProduct(orderPorductImage[0]);
    settotalItems(totalItems + orderPorductImage[1].count);
    settotalBIll(
      totalBIll +
        orderPorductImage[1].newproduct.price * orderPorductImage[1].count
    );
    console.log(totalBIll);
  };

  const removeAddedProduct = (id) => {
    setproductInCart((prevcart) => {
      if (!prevcart.has(id)) return prevcart;

      const newCart = new Map(prevcart);
      newCart.delete(id);
      return newCart;
    });
  };

  const deleteTokenFromLocalStorage = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const deleteAccountDataFromLocalStorage = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setIsUserHaveAccount(false);
    setIsAuthenticated(false);
  };
  useEffect(() => {
    localStorage.setItem(
      "isUserHaveAccount",
      JSON.stringify(isUserHaveAccount)
    );
  }, [isUserHaveAccount]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(IsAuthenticated));
  }, [IsAuthenticated]);

  useEffect(() => {
    setDataInSessionStorage("start", Start);
    setDataInSessionStorage("end", end);
    setTrendingProductSLice(TrendingProductData.slice(Start, end));
  }, [Start, end]);

  console.log(productInCart, "productInCartproductInCart");
  return (
    <ShopContext.Provider
      value={{
        increase,
        decrease,
        TrendingProductSLice,
        bedAndBathref,
        bathAndBodyref,
        selectAlItemsInput,
        salesAndDiscountref,
        handleToScroll,
        sectionRef,
        trendingProductsref,
        showProduct,
        combineAllCategoryProduct,
        showlessproduct,
        inputRef,
        debounceSearch,
        ShowAllOfProducts,
        setFilteredProductsToShowProducts,
        ShowSelectedProductOnAddToCartPage,
        SetAddtocartSelectedProduct,
        productInCart,
        AddProductInTOCart,
        removeProductFromCart,
        inputChecked,
        setRemovedProductID,
        RemovedProductID,
        removeAllProductFromCart,
        selectAllProducts,
        lowestPriceRef,
        HighestPriceRef,
        filterProductsByCategory,
        setPriceValue,
        combineAllCategoryProduct,
        increaseCount,
        decreasecount,
        singleproductCount,
        setdefaultCountToOne,
        IncreaseItemsInProductsSummmary,
        DecreaseItemsInProductsSummmary,
        IsOpenSignUPForm,
        setIsOpenSignUPForm,
        openSignUpForm,
        closeSignUpForm,
        unSelectOther,
        emailref,
        userNameRef,
        passWordRef,
        checkUserName,
        checkPassWord,
        checkemail,
        isValidName,
        isValidPassWord,
        isValidEmail,
        setisValidEmail,
        setisValidName,
        setisValidPassWord,
        storeformData,
        openEye,
        closeEye,
        ISOpenEye,
        setISOpenEye,
        openForm,
        closeform,
        showForm,
        IsValidLoginEmail,
        ISValidLoginPassword,
        loginPasswordRef,
        LoginEmailRef,
        isLoginDataISValid,
        setIsValidLoginEmail,
        setISValidLoginPassword,
        IsAllProductsSelected,
        checkISSelectedAll,
        IsAllProductsSelected,
        setIsAllProductsSelected,
        AddProductInOrdersummary,
        showPopUp,
        closePopup,
        ShowPopUpToBuyProduct,
        setShowPopUpToBuyProduct,
        getProductformMap,
        orderPorductImage,
        setSelectedProductInOrdersummary,
        totalBIll,
        totalItems,
        checkloginData,
        deleteTokenFromLocalStorage,
        deleteAccountDataFromLocalStorage,
        IsOpenLoginEye,
        openLoginEye,
        closeLogineye,
        IsAuthenticated,
        setIsAuthenticated,
        showLogoutPopUp,
        closeLogoutPopup,
        ShowPopUptoLogOut,
        ShowPopUpForDuplicateProduct,
        closePopUpOfDuplicateProduct,
        ISProductISDuplcate,
        setIsUserHaveAccount,
        isUserHaveAccount,
        DisableAddTOCartButton,
        setDisableAddTOCartButton,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default DataContext;
