import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../contexts/DarkModeProvider";

export default function DarkMode() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={() => setDarkMode((dark) => !dark)}>
      {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}
