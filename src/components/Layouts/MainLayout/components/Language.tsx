import { LANGUAGES } from "~/i18n/locales";
import { FormattedMessage } from "react-intl";
import { changeLanguage, selectLanguage } from "~/store/language.store";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Language as LanguageIcon } from "@mui/icons-material";
import React from "react";
import IconButton from "@mui/material/IconButton";

export default function Language() {
  const language = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();
  const currentLanguageName = LANGUAGES.find(
    (v) => v.code === language.locale
  )?.name;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (locale: string) => {
    dispatch(changeLanguage(locale));
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        size="large"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {LANGUAGES.map(({ name, code }) => (
          <MenuItem key={code} onClick={() => onChange(code)}>
            {name}
          </MenuItem>
        ))}
      </Menu>
      <FormattedMessage
        defaultMessage="{name}"
        values={{ name: currentLanguageName }}
        id="language"
      />
    </>
  );
}
