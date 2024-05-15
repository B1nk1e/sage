@php
/**
 * @var $item
 */
$item    = (object)$item;
$classes = 'nav-link';

if (!empty($item->classes[0])) {
    $classes .= ' ' . implode(' ', $item->classes);
}

if ($item->object_id == get_queried_object_id()) {
    $classes .= ' current';
}
@endphp

<a href="{{ $item->url }}" target="{{ $item->target }}"
   aria-label="{{ $item->title }}"
   role="menuitem"
   class="{{ $classes }}">
    {{ $item->title }}
</a>
