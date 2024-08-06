<script>
    // contacts structure
    let contacts = [
      { name: "Sercurity", number: "0459 111 040" },
      { name: "Customer Service", number: "07 5444 1944" },
      { name: "Emergency Services", number: "000" }
    ];
  
    // add new contact
    // @ts-ignore
    function addContact(name, number) {
      contacts = [...contacts, { name, number }];
    }
    //added
    addContact("Test", "1234");
    
  </script>
  <style>
    @import 'bootstrap/dist/css/bootstrap.min.css';
  </style>

<div class="list-group">
    {#each contacts as contact}
        <div class="list-group-item">{contact.name}: {contact.number}</div>
    {/each}
</div>
