import { Button, Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.scss";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <>
      <p className={styles.title}>Home</p>
      <Button onClick={changeLanguage}>changeLanguage</Button>
      <Input placeholder="Search...." />
      <p>{t("hello")}</p>
    </>
  );
};

export default HomePage;
