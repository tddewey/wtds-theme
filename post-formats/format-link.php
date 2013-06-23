<?php  if ( function_exists( 'the_post_format_url' ) ): ?>
<div class="explanation">
	<span class="explanation-text">
		<a href="<?php the_post_format_url(); ?>"><?php the_title(); ?></a>
	</span>
	<span class="explanation-hand-pointing">&#9758;</span>
</div>


	<div class="entry">
	<?php the_remaining_content(); ?>
	</div>
<?php else: ?>
	<?php the_content(); ?>
<?php endif; ?>