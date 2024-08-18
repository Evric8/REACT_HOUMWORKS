import React, { Component } from "react";
import Editor from "@toast-ui/editor";
import PropTypes from "prop-types";

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const { onContentChange } = this.props;

    this.editor = new Editor({
      el: this.editorRef.current,
      height: "300px",
      hideModeSwitch: true,
    });

    this.editor.addHook("change", () => {
      const content = this.editor.getMarkdown();
      onContentChange(content);
    });
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  render() {
    return (
      <>
        <div ref={this.editorRef} />
      </>
    );
  }
}

MarkdownEditor.propTypes = {
  onContentChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;