<nav class="navbar">
    <div class="navbar-holder">
        <a class="navbar-brand" href="{{ home_url('/') }}">
            @include('assets.logo')
        </a>
        <div class="navbar-toggler navbar-toggler--navigation">
            <div class="navbar-toggler__hamburger"></div>
        </div>
    </div>
    @includeWhen(has_nav_menu('primary_navigation'), 'partials.navbar.navigation')
</nav>
