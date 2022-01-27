/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
// import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
// import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
// import Comments from '@ckeditor/ckeditor5-comments/src/comments.js';
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
// import ImageBlock from '@ckeditor/ckeditor5-image/src/imageBlock';
// import ImageInline from '@ckeditor/ckeditor5-image/src/imageInline';
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
// import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
// import MathType from '@wiris/mathtype-ckeditor5';
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
// import RestrictedEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode.js';
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
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import Title from "@ckeditor/ckeditor5-heading/src/title.js";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Clipboard from "@ckeditor/ckeditor5-clipboard/src/clipboard";
// import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges.js';
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
// import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
import SelectAll from "@ckeditor/ckeditor5-select-all/src/selectall";

import FormData from "form-data";
import XMLHttpRequest from "XMLHttpRequest";

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import {
	toWidget,
	toWidgetEditable,
} from "@ckeditor/ckeditor5-widget/src/utils";
import Widget from "@ckeditor/ckeditor5-widget/src/widget";
import Command from "@ckeditor/ckeditor5-core/src/command";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

class SimpleBoxUI extends Plugin {
	init() {
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
			buttonView
				.bind("isOn", "isEnabled")
				.to(command, "value", "isEnabled");

			// Execute the command when the button is clicked (executed).
			this.listenTo(buttonView, "execute", () =>
				editor.execute("insertSimpleBox")
			);

			return buttonView;
		});
	}
}


class SimpleBox extends Plugin {
	static get requires() {
		return [SimpleBoxEditing, SimpleBoxUI];
	}
}

class SimpleBoxEditing extends Plugin {
	static get requires() {
		return [Widget];
	}

	init() {
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

				return toWidget(section, viewWriter, {
					label: "simple box widget",
				});
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

export default class ClassicEditor extends ClassicEditorBase {}
// Plugins to include in the build.
ClassicEditor.extraPlugins = [MyCustomUploadAdapterPlugin, SimpleBox];
ClassicEditor.builtinPlugins = [
	SimpleBox,
	Alignment,
	Autoformat,
	Autosave,
	BlockQuote,
	Bold,
	// CKFinder, // enable this if you want to pay
	// SimpleUploadAdapter,
	// CKFinderUploadAdapter,
	Code,
	CodeBlock,
	Clipboard,
	// Comments,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	// ImageBlock,
	// ImageInline,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	// MathType,
	MediaEmbed,
	MediaEmbedToolbar,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	// RestrictedEditingMode,
	SelectAll,
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
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Title,
	TodoList,
	// TrackChanges,
	Underline,
	WordCount,
	Widget,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	extraPlugins: [MyCustomUploadAdapterPlugin],
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
			"indent",
			"outdent",
			"|",
			"imageUpload",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"undo",
			"redo",
			"simpleBox"
		],
	},
	image: {
		toolbar: [
			"imageStyle:full",
			"imageStyle:side",
			"|",
			"imageTextAlternative",
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};

function MyCustomUploadAdapterPlugin(editor) {
	editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
		return new MyUploadAdapter(loader);
	};
}

class MyUploadAdapter {
	constructor(props) {
		// CKEditor 5's FileLoader instance.
		this.loader = props;
		// URL where to send files.
		this.url = "http://localhost:8000/api/editable-area/upload-image";
	}

	// Starts the upload process.
	upload() {
		return new Promise((resolve, reject) => {
			this._initRequest();
			this._initListeners(resolve, reject);
			this._sendRequest();
		});
	}

	// Aborts the upload process.
	abort() {
		if (this.xhr) {
			this.xhr.abort();
		}
	}

	// Example implementation using XMLHttpRequest.
	_initRequest() {
		const xhr = (this.xhr = new XMLHttpRequest());

		xhr.open("POST", this.url, true);
		xhr.responseType = "json";
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		// xhr.setRequestHeader('Authorization', getCookie('token'));
	}

	// Initializes XMLHttpRequest listeners.
	_initListeners(resolve, reject) {
		const xhr = this.xhr;
		const loader = this.loader;
		const genericErrorText = `Couldn't upload file: ${loader.file.name}.`;

		xhr.addEventListener("error", () => reject(genericErrorText));
		xhr.addEventListener("abort", () => reject());
		xhr.addEventListener("load", () => {
			const response = xhr.response;
			if (!response || response.error) {
				return reject(
					response && response.error
						? response.error.message
						: genericErrorText
				);
			}

			// If the upload is successful, resolve the upload promise with an object containing
			// at least the 'default' URL, pointing to the image on the server.
			resolve({ default: response.s3Url });
		});

		if (xhr.upload) {
			xhr.upload.addEventListener("progress", (evt) => {
				if (evt.lengthComputable) {
					loader.uploadTotal = evt.total;
					loader.uploaded = evt.loaded;
				}
			});
		}
	}

	// Prepares the data and sends the request.
	_sendRequest() {
		const data = new FormData();

		this.loader.file.then((result) => {
			data.append("file", result);
			this.xhr.send(data);
		});
	}
}
