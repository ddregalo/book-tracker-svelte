<script>
    export let username;
</script>

<header id="nav-user">
    <p class="username">book tracker</p>
    <p class="username">welcome | {username}</p>
</header>

<style>
    header {
        background-color: #ff7869;
        text-align: left;
        letter-spacing: 3px;
        padding: 0.1em 4em 0.1em 4em;
        margin: 0 auto;
        width: 100%;
    }

    .username {
        font-size: 0.9em;
        color: white;
    }

    #nav-user {
        display: inline-grid;
        grid-template-columns: 70% 30%;
    }
</style>