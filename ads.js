let ad1 = "<p>This is an advertisement 1: Your Ad Content Here</p>";

let ad2 = `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/22841960233/Pharmalite.in/Vid-mid', [[300, 75], [468, 60], [320, 100], [320, 50], [300, 100]], 'div-gpt-ad-1718780164545-0').addService(googletag.pubads());
    googletag.enableServices();
  });
</script>
<!-- /22841960233/Pharmalite.in/Vid-mid -->
<div id='div-gpt-ad-1718780164545-0' style='min-width: 300px; min-height: 50px;'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1718780164545-0'); });
  </script>
</div>`;

let vidad = 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=';

let subNo = "6.4k"
document.getElementById("subscriber-count").innerText = subNo ;
