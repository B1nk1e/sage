@php
    $cookieTypes = [
        ['name' => __( 'Functioneel' ), 'slug' => 'necessary'],
        ['name' => __( 'Analyse' ), 'slug' => 'analyse'],
        ['name' => __( 'Marketing' ), 'slug' => 'tracking']
    ];

    $title = get_field('cookie_title', 'options');
    $text = get_field('cookie_text', 'options');
    $cookieBtn = get_field('cookie_btn', 'options');
    $cookieInfo = get_field('cookie_info', 'options');
@endphp

@if (!isset($_COOKIE['enabl_consent']) && $title)
    <section class="cookie-consent">
        <div class="cookie-consent__text">
            <h4>{!! $title !!}</h4>

            @if ($text)
                <div class="cookie-consent__text__inner">
                    {!! $text !!}
                </div>
            @endif
        </div>

        <div class="cookie-consent__form--list">
            @foreach($cookieTypes as $key => $type)
                <label class="custom-control custom-control--checkbox">
                    <input type="checkbox" class="custom-control__input" {{ $type['slug'] == 'necessary' ? 'disabled' : '' }} checked name="checkbox" value="{{ $type['slug'] }}">
                    <span class="custom-control__indicator">
                        <i class="checkmark"></i>
                    </span>
                    <span class="custom-control__text">
                        {{ $type['name'] }}
                    </span>
                </label>
            @endforeach
        </div>

        <div class="cookie-consent__buttons">
            <button class="btn btn--barbie cookie-consent__btn">
                {{ $cookieBtn ? $cookieBtn : __('Ik ga akkoord', 'sage') }}
            </button>

            @if($cookieInfo['url'])
                <a href="{{ $cookieInfo['url'] }}"
                   target="{{ $cookieInfo['target'] ? $cookieInfo['target'] : '_self' }}" class="btn btn--ol" title="{!! $cookieInfo['title'] !!}">
                    {!! $cookieInfo['title'] !!}
                </a>
            @endif
        </div>
    </section>
@endif
