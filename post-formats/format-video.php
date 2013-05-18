<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

<div class="entry">

<figure class="video-container">
	<?php the_post_format_video(); ?>
</figure>

<?php if ( is_single() )
		the_remaining_content(); ?>
</div>