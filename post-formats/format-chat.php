<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

<div class="constrain">
	<?php
	if ( function_exists( 'the_post_format_chat' ) ) {
		the_post_format_chat();
	} else {
		the_content();
	}
	?>
</div>