var goalPage = App.createPage("goal","goal",{
  render: function (fn) {
      this.fetch("../html/goal.html", function (text) {
          fn(text);
      });
  },
  getDomObj : function(){}
});
