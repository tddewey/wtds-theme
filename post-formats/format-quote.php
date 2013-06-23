<?php
if ( function_exists( 'the_post_format_quote' ) ) {
	the_post_format_quote();
} else {
	the_content();
}
?>