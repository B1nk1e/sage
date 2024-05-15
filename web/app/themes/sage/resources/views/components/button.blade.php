@php
    if (!isset($class)) {
        $class = '';
    }
    if (!isset($icon)) {
        $icon = false;
    }
@endphp

<a href="{{ $item['url'] }}" class="btn {{ $class }}" target="{{ $item['target'] ? $item['target'] : '_self' }}" title="{{ $item['title'] }}">
    @if(str_contains($class, 'btn--il'))
        <i class="icon-{{$icon}}"></i>
    @endif

    {{ $item['title'] }}
    
    @if (!str_contains($class, 'btn--il') && $icon)
        <i class="icon-{{$icon}}"></i>
    @endif
</a>