//sticky header
document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById("floatingHeader");
  if (header) {
    var sticky = header.offsetTop;

    window.onscroll = function() {
      StickyHeader();
    };

    function StickyHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
});
//floating header end
export default StickyHeader;