<script>
    document.addEventListener("DOMContentLoaded", function() {
        fetch('../includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
    })

    fetch('../includes/footer.html')
</script>