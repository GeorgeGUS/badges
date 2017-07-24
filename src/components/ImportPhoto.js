import React from "react";

class ImportPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      result: ""
    };

    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.pasteImage = this.pasteImage.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  /**
     * Обработчик события клика по полю
     */
  handleFileSelect(evt) {
    this.setState({ file: evt.target.files[0] }, this.pasteImage); // FileList object
    this.file = evt.target.files[0];
  }

  /**
     * Обработчик события зависания над полем
     */
  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

  /**
     * Обработчик события дропа
     */
  handleFileDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.setState({ file: evt.dataTransfer.files[0] }, this.pasteImage); // FileList object.
  }

  /**
     * Вставка картинки
     */
  pasteImage() {
    // Only process image files.
    if (this.state.file !== "") {
      // TODO: Решить проблему с TypeError: Cannot read property 'type' of undefined
      // if (!this.state.file.type.match("image.*")) {
      //   return <img src="" alt="img" />;
      // }

      let reader = new FileReader();

      reader.onloadend = function() {
        this.setState({ result: reader.result }, this.renderImage);
      }.bind(this);
      reader.readAsDataURL(this.state.file);
    }
  }

  renderImage() {
    return {
      backgroundImage: "url(" + this.state.result + ")",
      backgroundSize: "cover"
    };
  }

  render() {
    return (
      <div
        className={this.props.className}
        id="drop_zone"
        style={this.renderImage()}
        onDragOver={this.handleDragOver}
        onDrop={this.handleFileDrop}
      >
        <label id="image">
          <input
            type="file"
            id="files"
            ref="files"
            onChange={this.handleFileSelect}
          />
          <br /> drop photo
          <br /> or click here
        </label>
      </div>
    );
  }
}

export default ImportPhoto;
