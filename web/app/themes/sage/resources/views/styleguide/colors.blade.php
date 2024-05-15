@php
    $colors = [
    'primary' => [
        [
            'name' => 'cola',
            'hex'  => '#000',
        ],
    ],
    'secondary' => [
        [
            'name' => 'milk',
            'hex'  => '#fff',
        ],
    ],
    'grayscale' => [
        [
            'name' => 'milk',
            'hex'  => '#fff',
        ],
        [
            'name' => 'cola',
            'hex'  => '#000',
        ],
    ],
]
@endphp

<section class="section section--colors">
    <div class="container">
        <div class="section__body">
            <div class="section__header">
                <h2 class="section__title">Colors</h2>
            </div>
            <div class="section__content">
                <div class="row">
                    @foreach($colors as $key => $color_categoy)
                        <div class="col-6 col-sm-auto">
                            <h3 class="subtitle">{{ $key }}</h3>
                            <div class="row">
                                @foreach($color_categoy as $color)
                                    <div class="col-sm-auto">
                                        <div class="color">
                                            <div class="color__item bg-{{ $color['name'] }}"></div>
                                            <div class="color__footer">
                                                <span class="color__title">{{ $color['name'] }}</span>
                                                <span class="color__hex">{{ $color['hex'] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
