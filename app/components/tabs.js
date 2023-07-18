"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ScrollableContainer from "./ScrollableContainer";

function Tab({
  id,
  label,
  activeTab,
  setActiveTab,
  tabStyle,
  disabled = false,
  extraComponent = null,
}) {
  return (
    <button
      key={id}
      onClick={() => !disabled && setActiveTab(id)}
      className={clsx(
        tabStyle,
        `${
          activeTab === id ? "text-white" : "text-black"
        } relative rounded-full px-8 py-3 text-sm font-medium font-silka z-50 text-[1rem] transition focus-visible:outline-2 antialiased`,
        { "opacity-50 cursor-not-allowed": disabled }
      )}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      disabled={disabled}
    >
      {activeTab === id && (
        <motion.span
          layoutId="bubble"
          className="absolute -z-20 inset-0  bg-accent "
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span>{label}</span>
      {extraComponent}
    </button>
  );
}

function Tabs({ children, tabContainerStyle }) {
  const [activeTab, setActiveTab] = useState(children[0].props.id);
  const [direction, setDirection] = useState(0);
  const activeTabIndex = children.findIndex(
    (child) => child.props.id === activeTab
  );
  const prevTabIndex = useRef(activeTabIndex);

  React.useEffect(() => {
    setDirection(activeTabIndex - prevTabIndex.current);
    prevTabIndex.current = activeTabIndex;
  }, [activeTab, activeTabIndex]);

  return (
    <div className="flex flex-col">
      <ScrollableContainer>
        <div className={clsx(tabContainerStyle, "flex")}>
          {children.map((child) =>
            React.cloneElement(child, {
              activeTab: activeTab,
              setActiveTab: setActiveTab,
            })
          )}
        </div>
      </ScrollableContainer>

      <ScrollableContainer>
        <AnimatePresence initial={false}>
          {children.map((child) => {
            if (child.props.id !== activeTab) return null;
            return (
              <motion.div
                key={child.props.id}
                initial={{ opacity: 0, x: 50 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 * direction }}
                transition={{ duration: 0.4 }}
                className="mt-10 xl:mt-22"
              >
                {child.props.children}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ScrollableContainer>
    </div>
  );
}

export { Tabs, Tab };
