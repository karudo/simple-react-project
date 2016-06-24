import React from 'react';

import StyleButton from './styleButton';

import styles from './editor.css';

const INLINE_STYLES = [
  {label: <strong>Bold</strong>, style: 'BOLD'},
  {label: <i>Italic</i>, style: 'ITALIC'},
  {label: <u>Underline</u>, style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'}
];

export default (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className={styles.controls}>
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.style}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
