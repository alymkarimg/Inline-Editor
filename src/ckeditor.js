/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import DataFilter from "@ckeditor/ckeditor5-html-support/src/datafilter.js";
import DataSchema from "@ckeditor/ckeditor5-html-support/src/dataschema.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import HtmlComment from "@ckeditor/ckeditor5-html-support/src/htmlcomment.js";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties.js";
import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting.js";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
import SpecialCharactersLatin from "@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js";
import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js";
import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import Title from "@ckeditor/ckeditor5-heading/src/title.js";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";

// custom widget plugin
import Command from "@ckeditor/ckeditor5-core/src/command";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import {
  toWidget,
  toWidgetEditable,
} from "@ckeditor/ckeditor5-widget/src/utils";
import Widget from "@ckeditor/ckeditor5-widget/src/widget";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

class InsertSimpleBoxCommand extends Command {
  execute() {
    this.editor.model.change((writer) => {
      // Insert <simpleBox>*</simpleBox> at the current selection position
      // in a way that will result in creating a valid model structure.
      this.editor.model.insertContent(createSimpleBox(writer));
    });
  }

  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      "simpleBox"
    );

    this.isEnabled = allowedIn !== null;
  }
}

function createSimpleBox(writer) {
  const simpleBox = writer.createElement("simpleBox");
  const simpleBoxTitle = writer.createElement("simpleBoxTitle");
  const simpleBoxDescription = writer.createElement("simpleBoxDescription");

  writer.append(simpleBoxTitle, simpleBox);
  writer.append(simpleBoxDescription, simpleBox);

  // There must be at least one paragraph for the description to be editable.
  // See https://github.com/ckeditor/ckeditor5/issues/1464.
  writer.appendElement("paragraph", simpleBoxDescription);

  return simpleBox;
}

class SimpleBox extends Plugin {
  static get requires() {
    return [SimpleBoxEditing, SimpleBoxUI];
  }
}

class SimpleBoxUI extends Plugin {
  init() {
    console.log("SimpleBoxUI#init() got called");

    const editor = this.editor;
    const t = editor.t;

    // The "simpleBox" button must be registered among the UI components of the editor
    // to be displayed in the toolbar.
    editor.ui.componentFactory.add("simpleBox", (locale) => {
      // The state of the button will be bound to the widget command.
      const command = editor.commands.get("insertSimpleBox");

      // The button will be an instance of ButtonView.
      const buttonView = new ButtonView(locale);

      buttonView.set({
        // The t() function helps localize the editor. All strings enclosed in t() can be
        // translated and change when the language of the editor changes.
        label: t("Simple Box"),
        withText: true,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind("isOn", "isEnabled").to(command, "value", "isEnabled");

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, "execute", () =>
        editor.execute("insertSimpleBox")
      );

      return buttonView;
    });
  }
}

class SimpleBoxEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    console.log("SimpleBoxEditing#init() got called");

    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add(
      "insertSimpleBox",
      new InsertSimpleBoxCommand(this.editor)
    );
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register("simpleBox", {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,

      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: "$block",
    });

    schema.register("simpleBoxTitle", {
      // Cannot be split or left by the caret.
      isLimit: true,

      allowIn: "simpleBox",

      // Allow content which is allowed in blocks (i.e. text with attributes).
      allowContentOf: "$block",
    });

    schema.register("simpleBoxDescription", {
      // Cannot be split or left by the caret.
      isLimit: true,

      allowIn: "simpleBox",

      // Allow content which is allowed in the root (e.g. paragraphs).
      allowContentOf: "$root",
    });

    schema.addChildCheck((context, childDefinition) => {
      if (
        context.endsWith("simpleBoxDescription") &&
        childDefinition.name == "simpleBox"
      ) {
        return false;
      }
    });
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    // <simpleBox> converters
    conversion.for("upcast").elementToElement({
      model: "simpleBox",
      view: {
        name: "section",
        classes: "simple-box",
      },
    });
    conversion.for("dataDowncast").elementToElement({
      model: "simpleBox",
      view: {
        name: "section",
        classes: "simple-box",
      },
    });
    conversion.for("editingDowncast").elementToElement({
      model: "simpleBox",
      view: (modelElement, { writer: viewWriter }) => {
        const section = viewWriter.createContainerElement("section", {
          class: "simple-box",
        });

        return toWidget(section, viewWriter, { label: "simple box widget" });
      },
    });

    // <simpleBoxTitle> converters
    conversion.for("upcast").elementToElement({
      model: "simpleBoxTitle",
      view: {
        name: "h1",
        classes: "simple-box-title",
      },
    });
    conversion.for("dataDowncast").elementToElement({
      model: "simpleBoxTitle",
      view: {
        name: "h1",
        classes: "simple-box-title",
      },
    });
    conversion.for("editingDowncast").elementToElement({
      model: "simpleBoxTitle",
      view: (modelElement, { writer: viewWriter }) => {
        // Note: You use a more specialized createEditableElement() method here.
        const h1 = viewWriter.createEditableElement("h1", {
          class: "simple-box-title",
        });

        return toWidgetEditable(h1, viewWriter);
      },
    });

    // <simpleBoxDescription> converters
    conversion.for("upcast").elementToElement({
      model: "simpleBoxDescription",
      view: {
        name: "div",
        classes: "simple-box-description",
      },
    });
    conversion.for("dataDowncast").elementToElement({
      model: "simpleBoxDescription",
      view: {
        name: "div",
        classes: "simple-box-description",
      },
    });
    conversion.for("editingDowncast").elementToElement({
      model: "simpleBoxDescription",
      view: (modelElement, { writer: viewWriter }) => {
        // Note: You use a more specialized createEditableElement() method here.
        const div = viewWriter.createEditableElement("div", {
          class: "simple-box-description",
        });

        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}

class Editor extends InlineEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  SimpleBox,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  DataFilter,
  DataSchema,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Markdown,
  MediaEmbed,
  MediaEmbedToolbar,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  Title,
  TodoList,
  Underline,
  WordCount,
];

// Editor configuration.
Editor.defaultConfig = {
  mediaEmbed: {
    previewsInData: true,
  },
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "htmlEmbed",
      "simpleBox",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
};

export default Editor;
