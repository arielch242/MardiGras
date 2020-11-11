function openNav() {
  document.getElementById("mainbarId").classList.remove('mainbar-closed')
  document.getElementById("mainbarId").classList.add('mainbar-open') 
  document.getElementById("strip").style.marginBottom = "100px";
  }
  
  function closeNav() {
    document.getElementById("mainbarId").classList.remove('mainbar-open')
    document.getElementById("mainbarId").classList.add('mainbar-closed')
    document.getElementById("strip").style.marginBottom= "0";
  }

