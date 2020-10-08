import CMS from 'netlify-cms-app';

CMS.registerEditorComponent({
    // Internal id of the component
    id: "cta_button",
    // Visible label
    label: "CTA Button",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'link', label: 'Button Link', widget: 'string'},{name: 'text', label: 'Button Text', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /button (\S+)\s/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        link: match[1],
        text: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return '<a class="btn rounded" href="' + obj.link +'">'+ obj.text + '</a>';
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        '<a href="' + obj.link + '" class="btn rounded">' + obj.text +' </a>'
      );
    }
  });