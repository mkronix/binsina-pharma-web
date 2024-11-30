import Image from "next/image";
import { bool, node, oneOf, string } from "prop-types";
import React, { memo, useMemo } from "react";

import RightArrow from "@/assets/images/arrow-right.svg";
import RightArrowWhite from "@/assets/images/rightArrowWhite.png";
import Loader from "@/components/Loader/Loader";

import styles from "./Button.module.css";

const Button = ({
  isBlock,
  isBlockOutlined,
  isBlackOutlined,
  isGhost,
  showLoading,
  nextIcon = false,
  prevIcon,
  prevIconClass,
  children,
  type = "button",
  size = "", // 'sm', 'lg'
  isLink,
  isInfo = false,
  isError,
  isDisable,
  noStyle,
  disabled,
  whiteNextIcon = false,
  ...props
}) => {
  const classNames = useMemo(() => {
    switch (true) {
      case isGhost:
        return styles.ghost;
      case isBlock:
        return styles.block;
      case isBlockOutlined:
        return styles.blockOutlined;
      case isBlackOutlined:
        return styles.blackOutlined;
      case isLink:
        return styles.btnLink;
      case isInfo:
        return styles.btnInfo;
      case isError:
        return styles.btnError;
      case isDisable:
        return styles.disable;
      case noStyle:
        return styles.noStyle;
      case disabled:
        return styles.disabledText;
      default:
        return styles.default;
    }
  }, [
    isGhost,
    isBlock,
    isBlockOutlined,
    isBlackOutlined,
    isLink,
    isInfo,
    isError,
    isDisable,
    noStyle,
    disabled,
  ]);

  const classSize = useMemo(() => {
    if (size === "sm") {
      return styles.sm;
    }
    if (size === "lg") {
      return styles.lg;
    }
    return "";
  }, [size]);

  return (
    <button
      type={type}
      {...props}
      disabled={disabled}
      className={`${classNames} ${classSize}`}
    >
      {showLoading ? (
        <Loader />
      ) : (
        <>
          {prevIcon && (
            <Image
              src={prevIcon}
              alt=""
              className={`h-[16] w-[16] ${prevIconClass}`}
            />
          )}
          {children}
          {/* {nextIcon && <RightArrow width="1.7em" height="1.5em" />} */}
          {(nextIcon || whiteNextIcon) && (
            <Image src={whiteNextIcon ? RightArrowWhite : RightArrow} alt="" />
          )}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  isBlock: bool,
  isBlockOutlined: bool,
  isBlackOutlined: bool,
  isGhost: bool,
  showLoading: bool,
  nextIcon: bool,
  prevIcon: string,
  prevIconClass: string,
  size: oneOf(["", "sm", "lg"]),
  children: node,
  type: string,
  isLink: bool,
  isInfo: bool,
  isError: bool,
  isDisable: bool,
  noStyle: bool,
  disabled: bool,
};

export default memo(Button);
