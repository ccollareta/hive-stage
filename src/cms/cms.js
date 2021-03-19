import CMS from 'netlify-cms-app';

CMS.registerEditorComponent({
    // Internal id of the component
    id: "cta_button",
    // Visible label
    label: "CTA Button",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'link', label: 'Button Link', widget: 'string'},{name: 'text', label: 'Button Text', widget: 'string'},{name: 'target', label: 'Target', widget: 'select', options: [{label: "Same Window", value: ''}, {label: "New Window", value: '_blank'}]}],
    // Pattern to identify a block as being an instance of this component
    pattern: `<a[^>]+href=\"(.*?)\"[^>]+target=\"(.*?)\"[^>]*><span>(.*?)</span></a>`,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        link: match[1],
        target: match[2],
        text: match[3]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return '<a class="btn rounded" href="' + obj.link +'" target="'+ obj.target +'"><span>'+ obj.text + '</span></a>';
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return (
        '<a href="' + obj.link + '" target="'+ obj.target +'" class="btn rounded"><span>' + obj.text +' </span></a>'
      );
    }
  });