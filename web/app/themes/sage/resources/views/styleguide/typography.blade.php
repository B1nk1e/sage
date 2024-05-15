@php
    $fonts_array = [
        [
            'family'      => 'Plain medium',
            'family_type' => 'primary',
            'weight'      => [
                'Regular',
                'Medium',
            ],
        ],
    ];

    $typography_array = [
        [
            'name'   => 'Heading 1',
            'styles' => [
                'Font / weight:'  => '600',
                'Font size:'      => '92/72/42',
                'Line height:'    => '102/82/46',
                'Letter spacing:' => '-4%',
            ],
            'html'   => '<h1>We enabl rapid growth with digital experiences</h1>',
        ],
        [
            'name'   => 'Heading 2',
            'styles' => [
                'Font / weight:'  => '600',
                'Font size:'      => '72/62/32',
                'Line height:'    => '82/62/36',
                'Letter spacing:' => '-4%',
            ],
            'html'   => '<h2>We enabl rapid growth with digital experiences</h2>',
        ],
        [
            'name'   => 'Heading 3',
            'styles' => [
                'Font / weight:'  => '600',
                'Font size:'      => '52/42/28',
                'Line height:'    => '62/52/32',
                'Letter spacing:' => '-4%',
            ],
            'html'   => '<h3>We enabl rapid growth with digital experiences</h3>',
        ],
        [
            'name'   => 'Heading 4',
            'styles' => [
                'Font / weight:'  => '600',
                'Font size:'      => '42/32/26',
                'Line height:'    => '52/42/30',
                'Letter spacing:' => '-3%',
            ],
            'html'   => '<h4>We enabl rapid growth with digital experiences</h4>',
        ],
        [
            'name'   => 'Heading 5',
            'styles' => [
                'Font / weight:'  => '600',
                'Font size:'      => '32/22/20',
                'Line height:'    => '42/32/24',
                'Letter spacing:' => '-2%',
            ],
            'html'   => '<h5>We enabl rapid growth with digital experiences</h5>',
        ],

        [
            'name'   => 'Body',
            'styles' => [
                'Font / weight:'  => '400',
                'Font size:'      => '18/16/15',
                'Line height:'    => '32/26/25',
            ],
            'html'   => '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>',
        ],
        [
            'name'   => 'Paragraph links',
            'styles' => [
                'Text decoration' => 'underline',
            ],
            'html'   => '<p>Lorem ipsum <a href="#">dolor sit amet</a>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>',
        ],
        [
            'name'   => 'Unordered list',
            'styles' => [
            ],
            'html'   => '<ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aenean commodo ligula eget dolor.</li><li>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Donec quam felis, ultricies nec, pellentesque.</li></ul>',
        ],
        [
            'name'   => 'Ordered list',
            'styles' => [
            ],
            'html'   => '<ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aenean commodo ligula eget dolor.</li><li>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Donec quam felis, ultricies nec, pellentesque.</li></ol>',
        ],
    ];
@endphp

<section class="section section--typography">
    <div class="container">
        <div class="section__header">
            <h2 class="section__title">Typography</h2>
        </div>

        <div class="section__content">
            <h3 class="subtitle">Font family</h3>
            @foreach ( $fonts_array as $fonts )
            <div class="row holder">
                @foreach ( $fonts['weight'] as $weight )
                <div class="col-sm-6 col-xl-3">
                    <div class="font font--{{ strtolower(str_replace(' ', '-',
                        $weight)) }} font--{{ $fonts['family_type'] }}">
                        <div class="font-preview">
                            <p>Aa</p>
                        </div>
                        <div class="font-text">
                            <span class="font-family">{{ $fonts['family'] }}</span>
                            <span class="font-weight">{{ $weight }}</span>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            @endforeach
        </div>

        @foreach ( $typography_array as $typography )
            <div class="section__content">
                <h3 class="subtitle">{{ $typography['name'] }}</h3>
                <div class="typography-code holder">
                    <div class="row">
                        <div class="col-lg-6 col-xxl-4">
                            @foreach ( $typography['styles'] as $key => $value )
                                <div class="row">
                                    <div class="col-4">
                                        <span class="style-key">{{ $key }}</span>
                                    </div>
                                    <div class="col-auto">
                                        <span class="style-value">{{ $value }}</span>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <div class="col-lg-6 col-xxl-8 typography-preview">
                            {!! $typography['html'] !!}
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</section>
