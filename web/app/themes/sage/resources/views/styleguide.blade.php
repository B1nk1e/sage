{{--
  Template Name: Styleguide
--}}

@extends('layouts.app')

@section('content')
    <div class="styleguide">
        @include('styleguide.colors')
        @include('styleguide.typography')
        @include('styleguide.icons')
        @include('styleguide.buttons')
        @include('styleguide.accordion')
        @include('styleguide.forms')
        @include('styleguide.checkboxes')
    </div>
@endsection
