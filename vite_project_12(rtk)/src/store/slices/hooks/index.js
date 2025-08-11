// src/hooks/reduxHooks.js
import { useDispatch, useSelector } from "react-redux";

// just export useDispatch and useSelector directly
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
