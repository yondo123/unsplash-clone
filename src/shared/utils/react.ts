import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export const getComponentText = (children: ReactNode) => {
  let childText = '';
  if (children) {
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (typeof child.props.children === 'string') {
          childText += child.props.children;
        } else {
          childText += getComponentText(child.props.children);
        }
      }
      if (typeof child === 'string') {
        childText += child;
      }
    });
  }
  return childText;
};

export const extractPropValueFromComponent = (children: ReactNode, propName: string) => {
  let propValue = '';
  if (children) {
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (typeof child.props.children === 'string') {
          propValue += child.props[propName];
        } else {
          propValue += extractPropValueFromComponent(child.props.children, propName);
        }
      }
      if (typeof child === 'string') {
        propValue += child;
      }
    });
  }
  return propValue;
};
