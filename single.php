<?php	 	 get_header(); ?>

<section>
	<?php	 	 get_template_part( 'loop', 'single' ); ?>

	<div class="shortlink clearfix">
		<div class="desc meta">
			Feel like sharing? Here's a shortlink, use your social network of choice.
		</div>
		<input type="text" disabled="disabled" class="meta" value="<?php	 	 echo wp_get_shortlink(); ?>">

	</div>
</section>

<?php	 	 get_footer(); ?>