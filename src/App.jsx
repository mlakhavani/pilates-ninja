import { useState, useRef } from 'react'

// ─── STRATEGY TAGS ─────────────────────────────────────────────────────────────

const STRATEGIES = [
  { id: 'glute',     label: 'Glute Immersion' },
  { id: 'ccurve',   label: 'C-Curve' },
  { id: 'classical', label: 'Classical' },
  { id: 'athletic', label: 'Athletic Sculpt' },
  { id: 'nervous',  label: 'Nervous System Reset' },
  { id: 'technical', label: 'Technical Flow' },
]

// ─── EXERCISE POOL ─────────────────────────────────────────────────────────────

const POOL = {
  glute: [
    {
      id: 'g1', move: 'Glute Bridge: The Slow Burn',
      duration: '10 full / 20 pulses / 30s hold',
      flow: 'Supine, feet hip-width, heels close to glutes. Roll the pelvis up slowly on 4 counts — feel each vertebra peel off the mat. Hold 2 counts at the top. Lower 4 counts. After 10 full reps: stay at the top, pulse 1 inch up for 20 counts. Then hold the peak for 30 seconds.',
      corrections: 'The drive is from the heel, not the toe. Push the heel into the floor and feel the hamstring contribute before the glute fires. At the top, ribs stay down — do not arch. Squeeze as if trying to crack a walnut between your glutes.',
      levelUp: 'Single leg: float one leg to tabletop, all reps and pulses on one side, then switch.',
      reset: 'Reduce range — only lift to 50% bridge height, focus on the muscle sensation.',
      badge: 'IGNITION', intensity: 3,
    },
    {
      id: 'g2', move: 'Clamshell: Isometric Protocol',
      duration: '15 reps / 15 pulses / 30s isometric',
      flow: 'Side-lying, hips stacked, knees bent at 45°, feet together. Rotate the top knee to the ceiling — slowly, 4 counts. Lower 4 counts. After 15 reps: stay at the top and pulse half an inch for 15 counts. End with a 30-second isometric hold at the top.',
      corrections: 'The hip does not roll back. The rotation is purely from the hip joint — external rotation only, not compensation from the spine. The foot does not lift above knee level.',
      levelUp: 'Add a resistance band just above the knee — must stay taut throughout.',
      reset: 'Reduce to 30° knee bend — smaller range, easier to isolate.',
      badge: 'HIP ISOLATE', intensity: 3,
    },
    {
      id: 'g3', move: 'Donkey Kick to Fire Hydrant',
      duration: '12 donkey kicks + 12 hydrants / 2-count pace',
      flow: 'Hands and knees, hip-width. Donkey Kick: press heel to ceiling, knee stays bent 90°. 2 counts up, 2 counts down. After 12: transition to Fire Hydrant — same knee, rotate it out to the side. Same pace. Finish with 8 circles combining both motions.',
      corrections: 'In the Donkey Kick, the hip must stay square to the mat — it does not open. The kick is a hip extension with a bent knee, not a leg raise. In Fire Hydrant, height is less important than the quality of external rotation.',
      levelUp: 'Add an ankle weight. In the circles, increase the arc — full range in each direction.',
      reset: 'One move at a time only. Master the Donkey Kick before adding the Hydrant.',
      badge: 'GLUTE SWEEP', intensity: 4,
    },
    {
      id: 'g4', move: 'Curtsy Lunge: Controlled Descent',
      duration: '10 reps each side / 4-count tempo',
      flow: 'Standing, feet hip-width. Step the right foot behind and to the left in a deep curtsy. Lower on 4 counts. Hover just above the floor — do not touch. Press through the front heel to return on 2 counts. Pause 2 counts standing.',
      corrections: 'The front knee tracks over the second toe — not inward. Torso stays upright. The back knee hovers at least 2 inches off the floor. Power comes from the glute of the front leg, not the quad of the back.',
      levelUp: 'Add a knee raise after returning to standing — balance challenge and hip flexor activation.',
      reset: 'Reduce depth — lower to 45° instead of 90°, or hold a wall for balance.',
      badge: 'STANDING BURN', intensity: 4,
    },
    {
      id: 'g5', move: 'Prone Hip Extension: The Finish',
      duration: '12 reps / 12 pulses each side',
      flow: 'Prone, forehead on hands. Squeeze one glute and lift that leg 2–3 inches off the mat — that is the entire range. Pulse that 2–3 inches for 12 counts. Lower. Repeat other side. End with both legs together, squeeze and lift for a 20-count hold.',
      corrections: '2–3 inches is not a typo. The range is tiny because the pelvis must stay perfectly neutral on the mat. The moment the hip pops up, you have gone too far. Place a hand under the hip — if pressure increases, lower the leg.',
      levelUp: 'Prop onto forearms (sphinx position) — changes the hip angle and increases recruitment.',
      reset: 'No lift — just isometrically squeeze one glute at a time, hold 10 counts each.',
      badge: 'CLOSER', intensity: 3,
    },
  ],
  ccurve: [
    {
      id: 'c1', move: 'C-Curve Void Hold',
      duration: '3 holds / 30 seconds each',
      flow: 'Seated at the back third of your mat. Roll the pelvis under, scoop the low belly, round the entire spine into a perfect arc. Arms extend parallel to the floor. Close your eyes. Hold. Breathe into the back body only.',
      corrections: 'The C-curve is a convex shape from the outside — your back rounds out toward the wall behind you. Most people flex only in the lumbar. Find the mid-thoracic engagement too. Chin floats 2 finger-widths off the chest, not pressed down.',
      levelUp: 'Add a 10-second breath suspension at the end of exhale — let the hold deepen.',
      reset: 'Seated against a wall, let the wall support the C-curve shape.',
      badge: 'SYSTEM RESET', intensity: 2,
    },
    {
      id: 'c2', move: 'Rolling Like a Ball: Suspended Edition',
      duration: '8–10 rolls / ultra-slow',
      flow: 'Begin in C-curve void hold. After 10 seconds, inhale slowly and roll back only to the shoulder blades. Exhale on the roll forward. The pace is twice as slow as normal. Every transition is controlled by breath, not momentum.',
      corrections: 'If you lose the C-curve at the bottom, you have gone too far. The roll goes only to the shoulder blades — not the neck. Chin stays floated. The deceleration on the way back is where the nervous system work lives.',
      levelUp: 'Add a 3-count pause at the back position — full suspension.',
      reset: 'Stay in the seated C-curve, breathe without rolling.',
      badge: 'ARTICULATION', intensity: 2,
    },
    {
      id: 'c3', move: 'Spine Stretch Forward: Traction',
      duration: '6 reps / 8-count reach, 10-count hold',
      flow: 'Seated tall, legs extended wider than hips. On a deep exhale, round forward — leading with the crown of the head, not the hands. At maximum depth, let gravity help for the 10-count hold. Roll back up sequentially, stacking one vertebra at a time.',
      corrections: 'This is spinal traction, not a hamstring stretch. The purpose is decompression, not distance. Let the belly button lift toward the spine as you round. The hold is passive — release the muscles, let gravity do the work.',
      levelUp: 'At the hold point, thread one arm through for a subtle rotation — 5 counts each side.',
      reset: 'Seated with knees bent, feet flat — half the range of motion.',
      badge: 'DECOMPRESSION', intensity: 1,
    },
    {
      id: 'c4', move: 'Single Leg Stretch: Void Protocol',
      duration: '10 reps each side / 4-count pace',
      flow: 'Supine, imprint. Curl up to C-curve position. Hold that arc. On 4 counts: extend one leg to 45° while pulling the other knee in. Count 1–2: extend. Count 3–4: switch. The arc of the spine does not move throughout.',
      corrections: 'The C-curve of the flexion does not change when the legs switch. Lumbar must stay imprinted. The leg that extends goes to 45°, not 90° — higher is too easy and loses the core challenge.',
      levelUp: 'Close eyes during the sequence — proprioceptive void work.',
      reset: 'Keep both knees in tabletop, just do breath work in the C-curve hold.',
      badge: 'VOID CORE', intensity: 3,
    },
    {
      id: 'c5', move: 'Double Leg Stretch: Arc Architecture',
      duration: '8 reps / 6-count full expression',
      flow: 'Supine, both knees to chest. Curl up to C-curve. Reach arms overhead and legs to 45° simultaneously on counts 1–3. Hold count 4. Sweep arms wide and draw knees back in on counts 5–6. The arc of the spine is constant — it does not fluctuate.',
      corrections: 'The moment the low back presses harder into the mat on the reach, the legs are too low. The belly scoops up and in — not gripped. The arms reach long, not up.',
      levelUp: 'Lower legs to 30° on the reach.',
      reset: 'Single leg at a time — one leg extends while the other stays in.',
      badge: 'C-CURVE CORE', intensity: 4,
    },
  ],
  classical: [
    {
      id: 'cl1', move: 'The Hundred',
      duration: '100 pulses / 10-breath sets',
      flow: 'Supine, imprint spine. Shoot legs to 45°, arms long by hips. Pump arms 2 inches with every beat. Drive the breath: 5 sniffs in, 5 sharp exhales out. Complete 10 full breath cycles — 100 pumps total.',
      corrections: '45° leg angle is non-negotiable — the low back must stay imprinted. Chin to chest, eyes on knees. Shoulders stay packed, not jammed. If the low back lifts, bring the legs higher.',
      levelUp: 'Lower legs to 30°, add 1-inch heel raises on every 10th count.',
      reset: 'Tabletop legs, knees over hips — ride the breath pattern only.',
      badge: 'POWER OPENER', intensity: 5,
    },
    {
      id: 'cl2', move: 'Roll-Up: Full Classical',
      duration: '6 reps / 4-count up, 4-count down',
      flow: 'Supine, legs together, arms overhead. Inhale: float arms to ceiling. Exhale: peel spine off the mat sequentially — lumbar last. Reach forward in a long C-curve. Inhale at the top. Exhale: roll back down, vertebra by vertebra.',
      corrections: 'The spine articulates — it is not a plank doing a sit-up. Feel each vertebra make contact with the mat on the way down. If you cannot peel without momentum, allow a slight bend in the knees.',
      levelUp: 'Slow the descent to 6 counts. Find each lumbar segment individually.',
      reset: 'Bent-knee variation — feet flat on the mat for assistance.',
      badge: 'ARTICULATION', intensity: 3,
    },
    {
      id: 'cl3', move: 'Single Leg Circle',
      duration: '5 circles each direction, each leg',
      flow: 'Supine, one leg extended to ceiling, other leg long on the mat. Circle the raised leg: cross the midline, sweep down, around, and back up. Keep the pelvis completely still. After 5 circles, reverse. Switch legs.',
      corrections: 'The pelvis is the anchor. If the hip rocks, the circle is too large. Start small and only increase range when the pelvis remains perfectly stable. The working leg initiates from the hip socket.',
      levelUp: 'Increase circle size to the edge of control — pelvis stability is the test.',
      reset: 'Bent knee on the working leg — smaller range, less load on the hip flexor.',
      badge: 'HIP CONTROL', intensity: 2,
    },
    {
      id: 'cl4', move: 'Side-Kick: Classical Line',
      duration: '10 front kicks / 10 back kicks each side',
      flow: 'Side-lying, body in one long line. Top leg lifts to hip height. Kick to the front on 2 counts with a small double pulse. Return to center on 2 counts. Sweep to the back — long, controlled hip extension. Return. Maintain the long side-body throughout.',
      corrections: '45° is the working range — higher and you have lost hip flexor control. Pelvis must not roll back. The kick is from the hip socket, not the momentum of the foot. The bottom waist stays lifted off the mat.',
      levelUp: 'Add small circles (3 clockwise, 3 counter) between kick sets.',
      reset: 'Parallel position, top knee bent — partial range only.',
      badge: 'HIP CHAIN', intensity: 3,
    },
    {
      id: 'cl5', move: 'Teaser: The Full Expression',
      duration: '6 reps / slow 4-count eccentric',
      flow: 'From supine, roll to full Teaser — V-position, arms parallel to legs. Hold 2 counts at the top. Lower only the torso on 4 slow counts, legs stay up. Pause 1 count at the bottom. Roll back up.',
      corrections: 'The scoop is the engine. The low belly lifts before the torso moves. Legs lower with the torso on the descent, but effort comes from the abs, not the hip flexors. Do not let the spine crash at the bottom.',
      levelUp: 'Add a scissor split at the top: one arm reaches while the opposite leg lowers 6 inches.',
      reset: 'Knees bent, tabletop — roll down through the spine sequentially.',
      badge: 'FINALE', intensity: 5,
    },
  ],
  athletic: [
    {
      id: 'a1', move: 'Bridge March: Power Protocol',
      duration: '32 counts lift / 64 counts march',
      flow: 'Roll up to bridge. Hold at the peak. March alternating knees to 90° on every 4-count beat. Freeze both legs in tabletop for 8 counts at the midpoint, then continue.',
      corrections: 'Drive the heel of the grounded foot into the floor. Hip stays square — no seesaw. The marching knee hits exactly 90°, thigh vertical. Ribs do not flare.',
      levelUp: 'Add a 2-inch pulse at the top of each march lift.',
      reset: 'Static bridge hold — focus on the hamstring contraction only.',
      badge: 'POWER', intensity: 4,
    },
    {
      id: 'a2', move: 'Plank to Pike: Trap Press',
      duration: '16 reps / 4-count tempo',
      flow: 'From plank, walk hands back toward feet into a wide-stance pike. Press down through the heels of the hands as if crushing the mat. Return to plank in 2 counts, hold pike for 2. Repeat.',
      corrections: 'In pike: ears between biceps, not forward of them. The press comes from the mid-back, not the shoulders. Wrists stay neutral. The movement is controlled — not a jump.',
      levelUp: 'Add a single-leg kick to the ceiling at the top of each pike.',
      reset: 'Dolphin pose — forearms down, remove wrist loading.',
      badge: 'UPPER CHAIN', intensity: 4,
    },
    {
      id: 'a3', move: 'Bird-Dog to Lunge: Athletic Flow',
      duration: '5 reps each side / continuous',
      flow: 'From hands and knees, extend opposite arm and leg. Hold 3 counts. Sweep the extended knee through in a wide arc — land in a kneeling lunge. Hold 2 counts. Return to Bird-Dog. Repeat.',
      corrections: 'The sweep transition is controlled, not flung. In the lunge, front shin stays vertical. The hip of the back leg pushes forward gently to open the flexor.',
      levelUp: 'Add a T-spine rotation in the lunge: top arm reaches to the ceiling, gaze follows.',
      reset: 'Skip the lunge — return to start from the Bird-Dog hold.',
      badge: 'FLOW CHAIN', intensity: 4,
    },
    {
      id: 'a4', move: 'Side Plank: 3-Phase Sculpture',
      duration: '3 sets each side / 6-6-6 count phases',
      flow: 'Full side plank. Phase 1: static hold, pure geometry, 6 counts. Phase 2: lower hip 2 inches, hold 6 counts. Phase 3: return to full and lift hips 2 inches above neutral, hold 6 counts. Lower with control.',
      corrections: 'Phase 2 is where people cheat. 2 inches means 2 inches — not 6. The oblique is under load in all three phases but differently. Phase 3 is an active adductor and oblique compression. Breathe throughout.',
      levelUp: 'In Phase 3, lift the top leg 6 inches — hold the sculpture.',
      reset: 'Forearm side plank, knee down for Phase 2 and Phase 3 work.',
      badge: 'LATERAL POWER', intensity: 4,
    },
    {
      id: 'a5', move: 'Push-Up: Pilates Precision',
      duration: '8 reps / 3-count descent, 1-count press',
      flow: 'From standing, roll down to plank — articulate the spine. Lower the body on 3 slow counts, hover an inch above the mat. Press up in 1 count. After 8 reps, walk hands in and roll up.',
      corrections: 'The body moves as one unit — no piking at the hips, no sagging. Lead the descent with the chest, not the nose. The hover at the bottom is where the work lives — do not skip it.',
      levelUp: 'Elevate feet on a block — increases anterior chain load.',
      reset: 'Knees down — maintain the same spinal alignment and tempo.',
      badge: 'PUSH CHAIN', intensity: 4,
    },
  ],
  nervous: [
    {
      id: 'n1', move: 'C-Curve Void Hold: The Reset',
      duration: '3 holds / 30 seconds each',
      flow: 'Seated at the back third of your mat. Roll the pelvis under, scoop the low belly, round the entire spine into a perfect arc. Arms extend parallel to the floor. Close your eyes. Breathe into the back body only.',
      corrections: 'The C-curve is convex from the outside. Most people flex only in the lumbar — find the mid-thoracic engagement too. Chin floats 2 finger-widths off the chest.',
      levelUp: 'Add a 10-second breath suspension at the end of exhale — let the hold deepen.',
      reset: 'Seated against a wall, let the wall support the shape.',
      badge: 'PARASYMPATHETIC', intensity: 1,
    },
    {
      id: 'n2', move: 'Rolling Like a Ball: Void Version',
      duration: '8 rolls / ultra-slow',
      flow: 'Begin in C-curve void hold. After 10 seconds, inhale slowly and roll back only to the shoulder blades. Exhale on the roll forward. The pace is twice as slow as normal. Every transition is controlled by breath, not momentum.',
      corrections: 'If you lose the C-curve at the bottom, you have gone too far. Roll only to shoulder blades — not the neck. The deceleration on the way back is where the nervous system work lives.',
      levelUp: 'Add a 3-count pause at the back position — full suspension.',
      reset: 'Stay in the seated C-curve — just breathe without rolling.',
      badge: 'NERVOUS SYSTEM', intensity: 2,
    },
    {
      id: 'n3', move: 'Spine Stretch: Deep Traction',
      duration: '6 reps / 8-count reach, 10-count hold',
      flow: 'Seated tall, legs extended wider than hips. Deep exhale: round forward, leading with the crown of the head, not the hands. At maximum depth, let gravity help for a 10-count hold. Roll back up sequentially.',
      corrections: 'This is spinal traction, not a hamstring stretch. The hold is passive — release the muscles, let gravity do the work. Belly button lifts toward the spine as you round.',
      levelUp: 'At the hold point, thread one arm through for a rotation — 5 counts each side.',
      reset: 'Seated with knees bent, feet flat — half the range of motion.',
      badge: 'DECOMPRESSION', intensity: 1,
    },
    {
      id: 'n4', move: 'Abstract Spine Curl: Asymmetric Arc',
      duration: '6 reps / 6-count peel, 3-count hold',
      flow: 'Supine, feet hip-width. Begin spinal roll-up — as you reach mid-back, drift the arms to 45° asymmetrically (one to 2 o\'clock, one to 10 o\'clock). Hold at the top. Descend symmetrically.',
      corrections: 'The asymmetry lives in the arms, not the pelvis. The pelvis stays perfectly squared. The rib cage can slightly rotate — maximum 10 degrees. The isometric hold means true stillness.',
      levelUp: 'Add a 3-count gaze shift: eyes track the higher arm, then return center before descent.',
      reset: 'Symmetrical bridge — remove the arm variation entirely.',
      badge: 'REGULATION', intensity: 2,
    },
    {
      id: 'n5', move: 'Child\'s Pose to Cat-Cow: Integration',
      duration: '3–5 minutes / breath-led',
      flow: 'Extended child\'s pose, arms forward, forehead heavy. Breathe into the back body for 1 minute. Transition slowly to table-top. Cat-Cow: in cat, find the deepest C-curve. In cow, let the spine release fully. No rushing, no counting.',
      corrections: 'This is not cool-down filler — it is the integration phase. The cat position should feel like every C-curve exercise just made sense here. Cow is full spinal extension — chest, not just lumbar.',
      levelUp: 'Add 3 spinal rolls: seated, roll all the way up to standing between each cat-cow set.',
      reset: 'Stay in child\'s pose for the full duration — total release only.',
      badge: 'INTEGRATION', intensity: 1,
    },
  ],
  technical: [
    {
      id: 't1', move: 'Abstract Spine Curl: Asymmetric Arc',
      duration: '6 reps / 6-count peel, 3-count hold',
      flow: 'Supine, feet hip-width. Begin spinal roll-up — as you reach mid-back, drift the arms to 45° asymmetrically (one to 2 o\'clock, one to 10 o\'clock). Hold the asymmetry at the top. Descend symmetrically.',
      corrections: 'The asymmetry lives in the arms, not the pelvis. The pelvis stays perfectly squared. The rib cage can slightly rotate — maximum 10 degrees. Isometric hold means true stillness, not white-knuckling.',
      levelUp: 'Add a 3-count gaze shift: eyes track the higher arm, then return center before descent.',
      reset: 'Symmetrical bridge — remove the arm variation entirely.',
      badge: 'PRECISION', intensity: 3,
    },
    {
      id: 't2', move: 'Mermaid Isometric: Gallery Hold',
      duration: '4 reps each side / 8-count hold at max range',
      flow: 'Seated Z-sit or cross-legged. Reach top arm overhead, lateral flexion into Mermaid. At full range, the bottom hand pushes into the floor for 4 counts (isometric), then the top arm reaches 2 more inches. Hold total 8 counts.',
      corrections: 'The push into the floor comes from the hand — but the reaction is felt in the oblique. You are creating resistance against yourself. Do not hike the shoulder of the top arm. Ear stays away from shoulder throughout.',
      levelUp: 'Lift the bottom hand off the floor for the last 3 counts — no support.',
      reset: 'Seated tall, place a block under the reaching hand for guidance.',
      badge: 'LATERAL CHAIN', intensity: 3,
    },
    {
      id: 't3', move: 'Snake + Twist: Thoracic Edit',
      duration: '4 reps / full expression',
      flow: 'Prone, hands under shoulders. Press into Snake: hips pivot, legs stack. At the top of the Snake, rotate the gaze and upper spine toward the ceiling — hold 3 counts. Unwind, return through plank, lower. Rest 2 counts. Repeat opposite.',
      corrections: 'The twist at the top is a thoracic rotation, not a cervical crane. Feel the middle back open, not the neck strain. If you cannot unstack the legs cleanly, the movement is not ready for the rotation.',
      levelUp: 'Add a single-arm reach at the top of the twist — opposite hand goes to the sky.',
      reset: 'Baby Cobra only — skip the leg stack, focus on the spinal extension.',
      badge: 'ADVANCED', intensity: 5,
    },
    {
      id: 't4', move: 'Teaser: Eccentric Control',
      duration: '8 reps / slow 4-count eccentric',
      flow: 'From seated, roll to full Teaser — V-position. Hold 2 counts at the top. Lower only the torso on 4 slow counts, legs stay up. Pause 1 count at the bottom. Roll back up.',
      corrections: 'The scoop is the engine. The low belly lifts before the torso moves. Do not let the spine crash at the bottom — the deceleration is the entire point of the exercise.',
      levelUp: 'Add a scissor split at the top: one arm reaches while the opposite leg lowers 6 inches.',
      reset: 'Knees bent, tabletop — roll down through the spine sequentially.',
      badge: 'TECHNICAL', intensity: 5,
    },
    {
      id: 't5', move: 'Boomerang: Sculptural Sequence',
      duration: '4–6 reps / treat each one as a sculpture',
      flow: 'From Teaser, scissor the legs to switch (back leg over front). Roll back. Roll up and scissor again. Lower the legs. Reach the arms behind, sweep them overhead in a wide arc. Finish in a forward fold with traction. Each rep is a full breath cycle.',
      corrections: 'The arm sweep at the end is the movement 90% of people skip — that overhead reach is where the spine decompresses. It should feel like someone is gently pulling your fingertips to the ceiling while your abs anchor down.',
      levelUp: 'Pause at the back roll apex — one full breath, complete spinal suspension.',
      reset: 'Skip the scissor entirely — just Teaser to forward fold, working the arm sweep.',
      badge: 'FULL EXPRESSION', intensity: 5,
    },
  ],
}

// ─── DAILY EDGES ───────────────────────────────────────────────────────────────

const DAILY_EDGES = {
  glute: {
    move: 'Single-Leg Romanian Deadlift',
    secret: 'Most people hinge at the hip and simultaneously lose their glute engagement. Before you start the movement, pre-contract the glute of the standing leg — squeeze it as if you\'re already at the bottom. Maintain that engagement through the entire hinge. The leg that floats behind you is only your counterbalance. All the work happens in the hip of the standing side. This single cue makes the movement three times harder and ten times more effective.',
    duration: '8 reps each side / 3-count hinge, 2-count return',
  },
  ccurve: {
    move: 'Open Leg Rocker: Suspension Point',
    secret: 'The hold everyone misses in Open Leg Rocker is the micro-pause at the back — when you\'ve rolled to the shoulder blades and your legs are overhead. This is a moment of complete spinal suspension. The nervous system responds to this proprioceptive input by down-regulating sympathetic tone. Breathe once at this apex, fully. It changes the entire experience from a balance move to a reset protocol.',
    duration: '5–6 reps / one full breath at each apex',
  },
  classical: {
    move: 'The Rollover: Spinal Wave',
    secret: 'Most people rollover with momentum. On the way back down, use 4 full counts of controlled spinal articulation — vertebra by vertebra. Place the lumbar last. The hamstring flexibility is secondary; the spinal control is the whole point. Film your rollover from the side — your spine should look like a slow wave, not a crash.',
    duration: '6–8 reps / ultra-slow on the descent',
  },
  athletic: {
    move: 'The Rollover: Power Variation',
    secret: 'Most people rollover with momentum. On the way back down, use 4 full counts of controlled spinal articulation — vertebra by vertebra. Place the lumbar last. The hamstring flexibility is secondary; the spinal control is the whole point. Film your rollover from the side — your spine should look like a slow wave, not a crash.',
    duration: '6–8 reps / ultra-slow on the descent',
  },
  nervous: {
    move: 'Open Leg Rocker: Suspension Point',
    secret: 'The hold everyone misses in Open Leg Rocker is the micro-pause at the back — when you\'ve rolled to the shoulder blades and your legs are overhead. This is a moment of complete spinal suspension. The nervous system responds to this proprioceptive input by down-regulating sympathetic tone. Breathe once at this apex, fully. It changes the entire experience from a balance move to a reset protocol.',
    duration: '5–6 reps / one full breath at each apex',
  },
  technical: {
    move: 'Boomerang: The Full Expression',
    secret: 'The Boomerang has an invisible third movement that 90% of instructors skip — the final overhead reach. After you roll and scissor the legs, the arms sweep from behind the body overhead and you traction the spine with shoulder flexion. That reach should feel like someone is gently pulling your fingertips to the ceiling while your abs anchor down. That moment is where the spine decompresses.',
    duration: '4–6 reps / treat each one as a sculpture',
  },
}

// ─── GENERATION LOGIC ──────────────────────────────────────────────────────────

function buildSequence(selectedTags) {
  const tags = selectedTags.length > 0 ? selectedTags : ['classical', 'ccurve', 'glute', 'athletic', 'nervous']
  const cursors = {}
  tags.forEach(t => { cursors[t] = 0 })
  const exercises = []
  let i = 0
  while (exercises.length < 5 && i < 60) {
    const tag = tags[i % tags.length]
    const pool = POOL[tag]
    const cursor = cursors[tag]
    if (pool && cursor < pool.length) {
      exercises.push(pool[cursor])
      cursors[tag] = cursor + 1
    }
    i++
  }
  const edgeTag = selectedTags[0] || 'classical'
  return { exercises, edge: DAILY_EDGES[edgeTag] }
}

// ─── COMPONENTS ────────────────────────────────────────────────────────────────

function IntensityMark({ level }) {
  return (
    <div className="flex gap-[3px] items-center">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-[5px] h-[5px] rounded-full transition-colors ${
            i <= level ? 'bg-[#C4A882]' : 'bg-[#3E3430]'
          }`}
        />
      ))}
    </div>
  )
}

function StrategyTag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-[11px] tracking-wider font-['Montserrat'] font-medium border transition-all duration-150 ${
        active
          ? 'bg-[#C4A882] border-[#C4A882] text-[#1E1813]'
          : 'bg-[#342C25] border-[#4A3F35] text-[#B8A99A] hover:border-[#7A6D62] hover:text-[#F5F5F0]'
      }`}
    >
      {label}
    </button>
  )
}

function ExerciseRow({ exercise, index, isExpanded, onToggle }) {
  return (
    <div className="border-b border-[#3E3430] last:border-b-0">
      {/* Row Header */}
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-start gap-5 group"
      >
        {/* Number */}
        <span className="flex-shrink-0 font-['Cormorant_Garamond'] text-[13px] text-[#5A4E46] leading-none pt-0.5 w-6 text-right">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Move + duration */}
        <div className="flex-1 min-w-0">
          <div className="font-['Cormorant_Garamond'] font-medium text-[19px] text-[#F5F5F0] leading-snug">
            {exercise.move}
          </div>
          <div className="text-[10px] tracking-[0.2em] text-[#7A6D62] mt-1.5 font-['Montserrat'] font-light uppercase">
            {exercise.duration}
          </div>
        </div>

        {/* Intensity + toggle */}
        <div className="flex-shrink-0 flex items-center gap-4 pt-1">
          <IntensityMark level={exercise.intensity} />
          <div className="text-[#5A4E46] text-sm group-hover:text-[#C4A882] transition-colors select-none">
            {isExpanded ? '−' : '+'}
          </div>
        </div>
      </button>

      {/* Expanded Detail */}
      {isExpanded && (
        <div className="pb-8 pl-11 animate-[fadeIn_0.2s_ease-out]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
            {[
              { label: 'The Flow',     text: exercise.flow },
              { label: 'Form Notes',   text: exercise.corrections },
              { label: 'Progression',  text: exercise.levelUp },
              { label: 'Modification', text: exercise.reset },
            ].map(({ label, text }) => (
              <div key={label}>
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#7A6D62] font-['Montserrat'] font-medium mb-2.5">
                  {label}
                </div>
                <p className="text-[13px] text-[#B8A99A] leading-relaxed font-['Montserrat'] font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function DailyEdge({ edge }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="mt-16 pt-10 border-t border-[#4A3F35]">
      {/* Label */}
      <div className="flex items-center gap-4 mb-7">
        <span className="text-[9px] tracking-[0.25em] uppercase font-['Montserrat'] font-medium text-[#7A6D62]">
          The Daily Edge
        </span>
        <div className="flex-1 h-px bg-[#3E3430]" />
      </div>

      {/* Move title */}
      <div className="font-['Cormorant_Garamond'] text-[24px] font-medium text-[#F5F5F0] mb-1.5">
        {edge.move}
      </div>
      <div className="text-[10px] tracking-[0.2em] uppercase font-['Montserrat'] font-light text-[#7A6D62] mb-9">
        {edge.duration}
      </div>

      {/* Secret reveal */}
      {!revealed ? (
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#3E3430]" />
          <button
            onClick={() => setRevealed(true)}
            className="text-[10px] tracking-[0.2em] uppercase font-['Montserrat'] font-medium text-[#7A6D62] hover:text-[#C4A882] transition-colors py-1.5 px-4 border border-[#4A3F35] hover:border-[#7A6D62] rounded-sm"
          >
            Reveal
          </button>
          <div className="flex-1 h-px bg-[#3E3430]" />
        </div>
      ) : (
        <div className="animate-[fadeIn_0.4s_ease-out]">
          <div className="text-[9px] tracking-[0.22em] uppercase font-['Montserrat'] font-medium text-[#7A6D62] mb-3">
            Instructor's Secret
          </div>
          <p className="text-[14px] text-[#B8A99A] leading-relaxed font-['Montserrat'] font-light max-w-2xl">
            {edge.secret}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────────

export default function App() {
  const [theme, setTheme] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [sequence, setSequence] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [expandedRows, setExpandedRows] = useState({})
  const sequenceRef = useRef(null)

  const toggleTag = (id) => {
    setSelectedTags(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    setExpandedRows({})
    setTimeout(() => {
      setSequence(buildSequence(selectedTags))
      setIsGenerating(false)
      setTimeout(() => {
        sequenceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }, 700)
  }

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const activeTagLabels = selectedTags.map(id => STRATEGIES.find(s => s.id === id)?.label).filter(Boolean)

  return (
    <div className="min-h-screen bg-[#2C241E]">

      {/* Organic stone grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.045]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.72\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '220px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pb-32">

        {/* ── HEADER ── */}
        <header className="pt-16 pb-14 text-center">
          <div className="text-[9px] tracking-[0.4em] uppercase font-['Montserrat'] font-medium text-[#5A4E46] mb-6">
            Boutique &nbsp; Ninja Edition
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-[44px] md:text-[58px] font-light text-[#F5F5F0] leading-none tracking-[0.06em] mb-4">
            Pilates Powerhouse Pro
          </h1>
          <div className="h-px w-14 bg-[#4A3F35] mx-auto mb-5" />
          <p className="text-[10px] tracking-[0.3em] uppercase font-['Montserrat'] font-light text-[#7A6D62]">
            Sequence Designer
          </p>
        </header>

        {/* ── INPUT ── */}
        <section className="mb-11">
          <input
            type="text"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            placeholder="Enter a theme, mood, or event..."
            className="w-full bg-transparent border-0 border-b border-[#4A3F35] focus:border-[#C4A882] outline-none py-3 text-[15px] text-[#F5F5F0] placeholder-[#5A4E46] font-['Montserrat'] font-light tracking-wide transition-colors"
          />
        </section>

        {/* ── STRATEGY FILTER ── */}
        <section className="mb-11">
          <div className="text-[9px] tracking-[0.25em] uppercase font-['Montserrat'] font-medium text-[#7A6D62] mb-4">
            Strategy Filter
          </div>
          <div className="flex flex-wrap gap-2">
            {STRATEGIES.map(s => (
              <StrategyTag
                key={s.id}
                label={s.label}
                active={selectedTags.includes(s.id)}
                onClick={() => toggleTag(s.id)}
              />
            ))}
          </div>
        </section>

        {/* ── GENERATE ── */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-4 bg-[#1E1813] hover:bg-[#150F0A] text-[#F5F5F0] text-[10px] tracking-[0.28em] uppercase font-['Montserrat'] font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isGenerating ? 'Composing...' : sequence ? 'Regenerate Sequence' : 'Generate Sequence'}
        </button>

        {/* ── SEQUENCE OUTPUT ── */}
        {sequence && !isGenerating && (
          <div ref={sequenceRef} className="mt-16 animate-[slideIn_0.4s_ease-out]">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-7">
              <span className="text-[9px] tracking-[0.25em] uppercase font-['Montserrat'] font-medium text-[#7A6D62]">
                Your Sequence
              </span>
              <div className="flex-1 h-px bg-[#3E3430]" />
            </div>

            {/* Theme + tags context line */}
            {(theme || activeTagLabels.length > 0) && (
              <div className="font-['Cormorant_Garamond'] italic text-[16px] text-[#7A6D62] mb-9">
                {[theme, ...activeTagLabels].filter(Boolean).join('  ·  ')}
              </div>
            )}

            {/* Table legend */}
            <div className="flex items-center gap-5 pb-3 border-b border-[#3E3430] text-[9px] tracking-[0.2em] uppercase font-['Montserrat'] font-medium text-[#4A3F35]">
              <span className="w-6" />
              <span className="flex-1">Movement</span>
              <span>Depth</span>
              <span className="w-4" />
            </div>

            {/* Exercises */}
            <div>
              {sequence.exercises.map((ex, idx) => (
                <ExerciseRow
                  key={ex.id}
                  exercise={ex}
                  index={idx}
                  isExpanded={!!expandedRows[ex.id]}
                  onToggle={() => toggleRow(ex.id)}
                />
              ))}
            </div>

            {/* Daily Edge */}
            <DailyEdge edge={sequence.edge} />

          </div>
        )}

        {/* ── EMPTY STATE ── */}
        {!sequence && !isGenerating && (
          <div className="mt-20 text-center">
            <div className="h-px w-8 bg-[#3E3430] mx-auto mb-6" />
            <p className="text-[10px] tracking-[0.22em] uppercase font-['Montserrat'] font-light text-[#4A3F35]">
              Enter a theme and generate
            </p>
          </div>
        )}

        {/* ── FOOTER ── */}
        <footer className="mt-20 pt-8 border-t border-[#3E3430] text-center">
          <p className="text-[9px] tracking-[0.22em] uppercase font-['Montserrat'] font-light text-[#4A3F35]">
            Pilates Powerhouse Pro &nbsp;·&nbsp; Boutique Ninja Edition
          </p>
        </footer>

      </div>

      {/* ── MEERA SIGNATURE ── */}
      <div className="fixed bottom-5 right-6 z-50 pointer-events-none">
        <p className="font-['Cormorant_Garamond'] italic text-[12px] text-[#3E3430] tracking-wide select-none">
          Designed by Meera Lakhavani
        </p>
      </div>

    </div>
  )
}
