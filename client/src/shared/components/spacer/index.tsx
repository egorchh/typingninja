import { forwardRef, LegacyRef } from 'react';
import cn from 'classnames';
import {
	alignClasses,
	directionClasses,
	gapClasses,
	justifyClasses,
	spaceBottomClasses,
	spaceLeftClasses,
	spaceRightClasses,
	spaceTopClasses,
	wrapClasses
} from './constants';
import { SpacerProps } from './types';
import styles from './index.module.css';

const SpacerComponent = forwardRef((props: SpacerProps, ref) => {
	const {
		className,
		children,
		justify = 'start',
		align = 'start',
		direction = 'row',
		gap,
		spaceTop,
		spaceBottom,
		spaceLeft,
		spaceRight,
		wrap = 'nowrap',
		fullHeight,
		fullWidth,
		...otherProps
	} = props;

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap],
		spaceTop && spaceTopClasses[spaceTop],
		spaceBottom && spaceBottomClasses[spaceBottom],
		spaceTop && spaceTopClasses[spaceTop],
		spaceTop && spaceTopClasses[spaceTop],
		spaceLeft && spaceLeftClasses[spaceLeft],
		spaceRight && spaceRightClasses[spaceRight],
		wrapClasses[wrap]
	];

	const mods = {
		[styles.fullHeight]: fullHeight,
		[styles.fullWidth]: fullWidth
	};

	return (
		<div className={cn(styles.flex, mods, classes)} {...otherProps} ref={ref as LegacyRef<HTMLDivElement>}>
			{children}
		</div>
	);
});

SpacerComponent.displayName = 'Spacer';
export const Spacer = SpacerComponent;
