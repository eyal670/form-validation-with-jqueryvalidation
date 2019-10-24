<?php
/*
Plugin Name: Divine Form Validation
Author: Divine Sites
Developer: Eyal Ron
Author URI: http://divinesites.co.il
Text Domain: Divine Sites
version: 1.0
*/

function divine_validate_add_scripts() {
    wp_enqueue_script( 'validationLib','https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js', array ( 'jquery' ), 1.1, true);
    wp_enqueue_script( 'divine_validate_script',plugin_dir_url( __FILE__ ) . 'js/divine_validate.js', array ( 'jquery' ), filemtime( plugin_dir_path( __FILE__ ).'js/divine_validate.js'), true);
}
add_action( 'wp_enqueue_scripts', 'divine_validate_add_scripts' );