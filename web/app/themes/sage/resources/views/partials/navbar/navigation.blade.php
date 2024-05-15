@if (App\custom_menu_object('primary_navigation'))
    <div class="navbar-menu">
        <ul class="navbar-menu__nav">
            @foreach(App\custom_menu_object('primary_navigation') as $item)
                <li role="none" class="nav-item">
                    @include('partials.navbar.item')
                </li>
            @endforeach
        </ul>
    </div>
@endif
