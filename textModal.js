const notes = {
  V1: [
    {
      spanId: "ftp-address-value",
      value: "ftp.tahtisadetta.fi"
    },
    {
      spanId: "ftp-username-value",
      value: undefined
    },
    {
      spanId: "ftp-password-value",
      value: undefined      
    },
    {
      spanId: "db-database-value",
      value: undefined      
    },
    {
      spanId: "db-user-value",
      value: undefined      
    },
    {
      spanId: "db-password-value",
      value: undefined      
    }
  ],
  V2: [
    {
      spanId: "ftp-address-value",
      value: "ftp.tahtisadetta.fi"
    },
    {
      spanId: "ftp-username-value",
      value: "rejoice@tahtisadetta.fi"
    },
    {
      spanId: "ftp-password-value",
      value: "i-will-note-tell-you"      
    },
    {
      spanId: "db-database-value",
      value: undefined      
    },
    {
      spanId: "db-user-value",
      value: undefined      
    },
    {
      spanId: "db-password-value",
      value: undefined      
    }
  ],
  V3: [
    {
      spanId: "ftp-address-value",
      value: undefined
    },
    {
      spanId: "ftp-username-value",
      value: undefined
    },
    {
      spanId: "ftp-password-value",
      value: undefined      
    },
    {
      spanId: "db-database-value",
      value: "tahti885_db_graafeja"      
    },
    {
      spanId: "db-user-value",
      value: "tahti885_graafeja_admin"      
    },
    {
      spanId: "db-password-value",
      value: "strong-password"      
    }
  ], 
}


// Get the text modal
var textModal = document.getElementById("lgc-textModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("textModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  textModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == textModal) {
    textModal.style.display = "none";
  }
}

window.displayNotes = function(obj){

  console.log(obj)

  const phase = notes[obj];

  if(typeof phase === 'undefined')
    return;

  phase.forEach(o => {
    let spanId = o.spanId;
    let spanElement = document.getElementById(spanId);

    let value = typeof o.value !== 'undefined' ? o.value : ""
    spanElement.innerHTML = value;
    
  });
  

  textModal.style.display = "block";
}