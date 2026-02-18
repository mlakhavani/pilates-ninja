import { useState, useEffect, useRef } from 'react'

// ─── DATA ──────────────────────────────────────────────────────────────────────

const VIBES = {
  miami: {
    id: 'miami',
    name: 'Miami Music Week',
    subtitle: '/ Ultra',
    emoji: '🔊',
    bpm: '128 BPM',
    tag: 'BASS DROP PROTOCOL',
    description: 'High-intensity cardio-Pilates fusion. 128-count structures built for the drop. Maximum heat, zero apologies.',
    gradient: 'from-pink-600 via-red-500 to-orange-500',
    accent: '#ff2d78',
    accentSoft: '#ff6ba8',
    badgeColor: 'bg-red-900/40 text-red-400 border-red-800/50',
    sequence: [
      {
        id: 1,
        move: 'The Hundred: Ninja Edition',
        duration: '100 pulses / 128-count match',
        flow: 'Start supine, imprint spine. On the bass drop cue — shoot legs to 45°, arms long by hips. Pump arms 2 inches with every beat. Drive the breath: 5 sniffs in, 5 sharp exhales out.',
        corrections: '45° leg angle non-negotiable — low back must stay imprinted. Chin to chest, eyes on knees. If the beat drops, your legs don\'t. Shoulders stay packed, not jammed.',
        levelUp: 'Lower legs to 30°, add 1-inch heel raises on every 10th count',
        reset: 'Table-top legs, knees stacked over hips — ride the breath pattern only',
        badge: 'POWER OPENER',
        intensity: 5,
      },
      {
        id: 2,
        move: 'Bass Drop Bridge March',
        duration: '32 counts lift / 64 counts march',
        flow: 'Roll up to bridge. Hold at the peak. March alternating knees to 90° on every 4-count beat. On the imaginary drop — freeze both legs in tabletop for 8 counts, then continue.',
        corrections: 'Drive the heel of the grounded foot into the floor. Hip stays square — no seesaw. The marching knee hits exactly 90°, thigh vertical. Ribs don\'t flare, ever.',
        levelUp: 'Add a 2-inch pulse at the top of each march lift',
        reset: 'Static bridge hold, focus on the hamstring contraction only',
        badge: 'GLUTE IGNITION',
        intensity: 4,
      },
      {
        id: 3,
        move: 'Plank to Downward Trap-Press',
        duration: '16 reps / 4-count tempo',
        flow: 'From plank, walk hands back toward feet into a wide-stance pike. Press down through the heels of the hands as if crushing the mat. Return to plank in 2 counts, hold pike for 2. Repeat.',
        corrections: 'In pike: ears between biceps, not forward of them. The press is coming from the mid-back, not the shoulders. Wrists stay neutral.',
        levelUp: 'Add a single-leg kick to ceiling at top of each pike',
        reset: 'Dolphin pose — forearms down, remove wrist loading',
        badge: 'UPPER CHAIN',
        intensity: 4,
      },
      {
        id: 4,
        move: 'Side-Kick Sequence: Ultra Mix',
        duration: '24 reps each side / 2-count rhythm',
        flow: 'Side-lying, bottom arm long under head. Stack hips perfectly vertical. Kick top leg to 45° (not 90°) on count 1, hold 1 count, return on count 2. Last 8 counts: pulse at the front position.',
        corrections: '45° is the sweet spot — any higher and you\'ve lost the hip flexor control. Pelvis must not roll back. The kick is from the hip socket, not the momentum of the foot.',
        levelUp: 'Add small circles (3 clockwise, 3 counter) before returning',
        reset: 'Parallel position, top knee bent — partial range kick only',
        badge: 'HIP CHAIN',
        intensity: 3,
      },
      {
        id: 5,
        move: 'Teaser Drop: Bass Edition',
        duration: '8 reps / slow 4-count eccentric',
        flow: 'From seated, roll to full Teaser (V-position, arms parallel to legs). Hold 2 counts at the top. Lower ONLY your torso on 4 slow counts — legs stay up. Pause 1 count at the bottom. Roll back up.',
        corrections: 'The scoop is the engine. Your low belly lifts BEFORE your torso moves. Legs lower with the torso on the descent but the effort comes from abs, not hip flexors. Don\'t let the spine crash.',
        levelUp: 'Add a scissor split at the top: one arm reaches while the opposite leg lowers 6 inches',
        reset: 'Knees bent, tabletop — roll down through the spine sequentially',
        badge: 'FINALE',
        intensity: 5,
      },
    ],
    dailyEdge: {
      move: 'The Rolling Thunder: Bass Drop Rollover',
      secret: 'Most people rollover with momentum. Ninja secret: on the way back down, use 4 full counts of controlled spinal articulation — vertebra by vertebra. Place your lumbar last. The hamstring flexibility is secondary; the spinal control is the whole point. Film your rollover from the side — your spine should look like a slow wave, not a crash.',
      duration: '6–8 reps / ultra-slow on the descent',
    },
  },
  artbasel: {
    id: 'artbasel',
    name: 'Art Basel',
    subtitle: 'Miami Edition',
    emoji: '🎨',
    bpm: 'Asymmetrical Flow',
    tag: 'ABSTRACT ISOMETRICS',
    description: 'Creative, sculptural movement. Asymmetrical flows that treat the body as living architecture. Holds that rewire motor patterns.',
    gradient: 'from-violet-600 via-purple-500 to-pink-500',
    accent: '#a855f7',
    accentSoft: '#c084fc',
    badgeColor: 'bg-violet-900/40 text-violet-300 border-violet-800/50',
    sequence: [
      {
        id: 1,
        move: 'Abstract Spine Curl: Asymmetric Arc',
        duration: '6 reps / 6-count peel, 3-count hold',
        flow: 'Supine, feet hip-width. Begin spinal roll-up — but as you reach mid-back, drift the arms to 45° asymmetrically (one reaching to 2 o\'clock, one to 10 o\'clock). Hold the asymmetry at the top. Descend symmetrically.',
        corrections: 'The asymmetry lives in the arms, NOT the pelvis. Your pelvis stays perfectly squared. The rib cage can slightly rotate — maximum 10 degrees. Isometric hold means true stillness, not white-knuckling.',
        levelUp: 'Add a 3-count gaze shift: eyes track the higher arm, then return center before descent',
        reset: 'Symmetrical bridge — remove the arm variation entirely',
        badge: 'SCULPT OPENER',
        intensity: 3,
      },
      {
        id: 2,
        move: 'Bird-Dog to Ninja Lunge: Sculptural Flow',
        duration: '5 reps each side / continuous',
        flow: 'From hands and knees, extend opposite arm + leg (Bird-Dog). Hold 3 counts. THEN: sweep the extended knee through (under body) in a wide arc — land in a kneeling lunge. Hold the lunge shape for 2 counts. Return to Bird-Dog. Repeat.',
        corrections: 'The sweep transition is controlled, not flung. Think: your knee draws a slow rainbow under you. In the lunge, front shin stays vertical. The hip of the back leg pushes gently forward to open the flexor.',
        levelUp: 'Add a T-spine rotation in the lunge: reach the top arm to the ceiling, gaze follows',
        reset: 'Skip the lunge — just return to start from the Bird-Dog hold',
        badge: 'FLOW CHAIN',
        intensity: 4,
      },
      {
        id: 3,
        move: 'Mermaid Isometric: Gallery Hold',
        duration: '4 reps each side / 8-count hold at max range',
        flow: 'Seated Z-sit or crossed leg. Reach top arm overhead, lateral flexion into the Mermaid shape. At full range, the bottom hand pushes INTO the floor for 4 counts (isometric), then the top arm reaches 2 more inches. Hold total 8 counts.',
        corrections: 'The push into the floor comes from the hand — but the REACTION is felt in the oblique. You\'re creating resistance against yourself. Don\'t hike the shoulder of the top arm. Ear stays away from shoulder throughout.',
        levelUp: 'Lift the bottom hand off the floor for the last 3 counts (no support)',
        reset: 'Seated tall, place a block under the reaching hand for guidance',
        badge: 'LATERAL CHAIN',
        intensity: 3,
      },
      {
        id: 4,
        move: 'Snake + Twist: The Contortion Edit',
        duration: '4 reps / full expression',
        flow: 'Prone, hands under shoulders. Press into Snake (Pilates): hips pivot, legs stack. At the top of the Snake, rotate the gaze and upper spine toward the ceiling — hold 3 counts. Unwind, return through plank, lower. Rest 2 counts. Repeat opposite.',
        corrections: 'The twist at the top is a THORACIC rotation, not a cervical crane. Feel your middle back open, not your neck strain. If you can\'t unstack the legs cleanly, the movement isn\'t ready.',
        levelUp: 'Add a single-arm reach at the top of the twist — opposite hand goes to sky',
        reset: 'Baby Cobra only — skip the leg stack entirely, focus on the spinal extension',
        badge: 'ADVANCED ART',
        intensity: 5,
      },
      {
        id: 5,
        move: 'Side Plank Sculpture: 3-Phase Hold',
        duration: '3 sets each side / 6-6-6 count phases',
        flow: 'Full side plank. Phase 1: static hold — pure geometry, 6 counts. Phase 2: lower hip 2 inches, hold 6 counts. Phase 3: return to full AND lift hips 2 inches above neutral — hold 6 counts. Lower with control.',
        corrections: 'Phase 2 is where people cheat. 2 inches means 2 inches — not 6. The oblique is under load in all three phases but differently. Phase 3 is an active adductor + oblique compression. Breathe throughout.',
        levelUp: 'In Phase 3, lift the top leg 6 inches — hold the sculpture',
        reset: 'Forearm side plank, knee down for the Phase 2 + 3 work',
        badge: 'CLOSER',
        intensity: 4,
      },
    ],
    dailyEdge: {
      move: 'Boomerang: The Full Expression',
      secret: 'The Boomerang has an invisible third movement that 90% of instructors skip — the final overhead reach. After you roll and scissor the legs, the arms sweep from behind the body overhead and you traction your spine with shoulder flexion. That reach should feel like someone is gently pulling your fingertips to the ceiling while your abs anchor down. THAT moment is where the spine decompresses.',
      duration: '4–6 reps / treat each one as a sculpture',
    },
  },
  eclipse: {
    id: 'eclipse',
    name: 'Aquarius Solar Eclipse',
    subtitle: '∞ Void Protocol',
    emoji: '🌑',
    bpm: 'Nervous System Reset',
    tag: 'C-CURVE IMMERSION',
    description: 'Deep nervous system regulation. Heavy parasympathetic activation through sustained C-curve architecture and void holds.',
    gradient: 'from-slate-700 via-indigo-900 to-black',
    accent: '#6366f1',
    accentSoft: '#818cf8',
    badgeColor: 'bg-indigo-900/40 text-indigo-300 border-indigo-800/50',
    sequence: [
      {
        id: 1,
        move: 'C-Curve Void Hold: The Reset',
        duration: '3 holds / 30s each',
        flow: 'Seated at the back third of your mat. C-curve: roll the pelvis under, scoop the low belly, round the entire spine into a perfect arc. Arms extend parallel to the floor. Close your eyes. Hold. Breathe into the back body only.',
        corrections: 'The C-curve is a CONVEX shape from the outside — your back rounds out toward the wall behind you. Most people flex only in the lumbar. Find the mid-thoracic engagement too. Chin is NOT on chest — it floats 2 finger-widths off.',
        levelUp: 'Add a 10-second breath suspension at the end of exhale — let the hold deepen',
        reset: 'Seated against a wall, let the wall support the C-curve shape',
        badge: 'SYSTEM RESET',
        intensity: 2,
      },
      {
        id: 2,
        move: 'Rolling Like a Ball: Void Version',
        duration: '8–10 rolls / ultra slow',
        flow: 'Begin in C-curve void hold. After 10 seconds, initiate a slow inhale and roll back only to the shoulder blades. Exhale on the roll forward. The pace is twice as slow as normal. Every transition is controlled by the breath, not momentum.',
        corrections: 'If you lose the C-curve at the bottom, you\'ve gone too far. The roll only goes to shoulder blades — NOT the neck. Chin stays floated. The deceleration on the way back is where the nervous system work lives.',
        levelUp: 'Add a 3-count pause at the back position — full suspension',
        reset: 'Don\'t roll at all — just breathe in the seated C-curve for the full duration',
        badge: 'NERVOUS SYSTEM',
        intensity: 2,
      },
      {
        id: 3,
        move: 'Spine Stretch Forward: Deep Void',
        duration: '6 reps / 8-count reach, 10-count hold',
        flow: 'Seated tall, legs extended wider than hips. On a deep exhale, round forward — leading with the crown of the head, not the hands. At maximum depth, let gravity help for the 10-count hold. Roll back up sequentially, stacking one vertebra at a time.',
        corrections: 'This is not a hamstring stretch. It is a spinal traction. The purpose is decompression, not distance. Let the belly button lift toward the spine as you round. The hold is passive — release the muscles, let gravity do the work.',
        levelUp: 'At the hold point, thread one arm through for a subtle rotation — hold 5 counts, switch sides',
        reset: 'Seated with knees bent, feet flat — half the range of motion',
        badge: 'DECOMPRESSION',
        intensity: 1,
      },
      {
        id: 4,
        move: 'Single Leg Stretch: Slow-Void Protocol',
        duration: '10 reps each side / 4-count pace',
        flow: 'Supine, imprint. Curl up to C-curve position (flexion). Hold that arc. On 4 counts: extend one leg to 45° while pulling the other knee in. Count 1-2: extend. Count 3-4: switch. The arc of the spine does not move throughout.',
        corrections: 'The C-curve of the flexion does NOT change when the legs switch. Your lumbar must stay imprinted — test this by placing a finger between your low back and mat. The leg that extends goes to 45°, not 90° (which is too easy).',
        levelUp: 'Close eyes during the sequence — proprioceptive void work',
        reset: 'Keep both knees in tabletop, just do breath work in the C-curve hold',
        badge: 'VOID CORE',
        intensity: 3,
      },
      {
        id: 5,
        move: 'Child\'s Pose to Cat-Cow: The Closing Ritual',
        duration: '3–5 minutes / breath-led',
        flow: 'Extended child\'s pose: arms forward, forehead heavy. Breathe into the back body for 1 minute. Transition slowly to table-top. Cat-cow: in cat, find the deepest C-curve you can. In cow, let the spine release fully. No rushing. No counting. Let the nervous system lead.',
        corrections: 'This is not cool-down filler. It is the integration phase. The cat position should feel like every C-curve exercise you just did made sense here. Cow is a full spinal extension — chest, not just lumbar.',
        levelUp: 'Add 3 spinal rolls: seated, roll all the way up to standing between each cat-cow set',
        reset: 'Stay in child\'s pose for the full duration — total release only',
        badge: 'INTEGRATION',
        intensity: 1,
      },
    ],
    dailyEdge: {
      move: 'Open Leg Rocker: Suspension Point',
      secret: 'The void hold everyone misses in Open Leg Rocker is the micro-pause at the back — when you\'ve rolled to the shoulder blades and your legs are overhead. This is a moment of complete spinal suspension. The nervous system responds to this proprioceptive input by down-regulating sympathetic tone. Breathe once at this apex, fully. It changes the entire experience of the exercise from "hard balance move" to "reset protocol."',
      duration: '5–6 reps / one full breath at each apex',
    },
  },
  southbeach: {
    id: 'southbeach',
    name: 'Late Night South Beach',
    subtitle: 'After Dark',
    emoji: '🌙',
    bpm: 'Slow Burn',
    tag: 'GLUTE IMMERSION',
    description: 'Slow, intentional, and deeply controlled. Glute-dominant sequences built for the burn that smolders, not explodes.',
    gradient: 'from-rose-900 via-pink-900 to-purple-900',
    accent: '#f43f5e',
    accentSoft: '#fb7185',
    badgeColor: 'bg-rose-900/40 text-rose-300 border-rose-800/50',
    sequence: [
      {
        id: 1,
        move: 'Glute Bridge: The South Beach Burn',
        duration: '10 full / 20 pulses / 30s hold',
        flow: 'Supine, feet hip-width, heels close to glutes. Roll the pelvis up SLOWLY on 4 counts — feel each vertebra peel off the mat. Hold 2 counts at the top. Lower 4 counts. After 10 full reps: stay at the top, pulse 1 inch up for 20 counts. Then hold the peak for 30 seconds.',
        corrections: 'The drive is from the HEEL, not the toe. Push the heel into the floor and feel the hamstring contribute before the glute fires. At the top, your ribs stay down — don\'t arch. Squeeze as if you\'re trying to crack a walnut between your glutes.',
        levelUp: 'Single leg: float one leg to tabletop, all reps and pulses on one side, then switch',
        reset: 'Reduce range — only lift to 50% bridge height, focus on the muscle sensation',
        badge: 'IGNITION',
        intensity: 3,
      },
      {
        id: 2,
        move: 'Clamshell: Slow Burn Protocol',
        duration: '15 reps / 15 pulses / 30s isometric',
        flow: 'Side-lying, hips stacked, knees bent at 45°, feet together. Rotate the top knee to the ceiling — slowly, 4 counts. Lower 4 counts. After 15 reps: stay at the top and pulse half an inch for 15 counts. End with a 30-second isometric hold at the top.',
        corrections: 'The hip does NOT roll back. Tape an imaginary string from your top hip to the ceiling — it stays there. The rotation is purely from the hip joint (external rotation), not from compensating with the spine. Your foot does not lift above the knee level.',
        levelUp: 'Add a resistance band just above the knee — band must stay taut throughout',
        reset: 'Reduce to 30° knee bend — smaller range, easier to isolate',
        badge: 'HIP ISOLATE',
        intensity: 3,
      },
      {
        id: 3,
        move: 'Donkey Kick to Fire Hydrant: The Combo',
        duration: '12 donkey kicks + 12 hydrants / 2-count pace',
        flow: 'Hands and knees, hip-width. Donkey Kick: press heel to ceiling, knee stays bent 90°, on 2 counts up / 2 counts down. After 12: immediately transition to Fire Hydrant (same knee, rotate it out to the side). Same 2-count pace. Finish with 8 circles combining both motions.',
        corrections: 'In the Donkey Kick, your hip must stay square to the mat — it does not open. The kick is a hip EXTENSION with a bent knee, not a leg raise. In Fire Hydrant, the height is less important than the external rotation quality.',
        levelUp: 'Add an ankle weight. In the circles, make them bigger — full range in each direction',
        reset: 'One move at a time only — master the Donkey Kick before adding the Hydrant',
        badge: 'GLUTE SWEEP',
        intensity: 4,
      },
      {
        id: 4,
        move: 'Curtsy Lunge: Slow & Controlled',
        duration: '10 reps each side / 4-count tempo',
        flow: 'Standing, feet hip-width. Step the right foot behind and to the LEFT in a deep curtsy. Lower on 4 counts. Hover just above the floor — don\'t touch. Press through the FRONT heel to return on 2 counts. Pause 2 counts standing. Repeat.',
        corrections: 'The front knee tracks over the second toe — not inward. Your torso stays upright (slight forward lean is fine, but no collapse). The back knee should hover at least 2 inches off the floor. The power comes from the GLUTE of the front leg, not the quad of the back.',
        levelUp: 'Add a knee raise after returning to standing — balance challenge + hip flexor activation',
        reset: 'Reduce depth — lower to 45° instead of 90°, or hold a wall for balance',
        badge: 'STANDING BURN',
        intensity: 4,
      },
      {
        id: 5,
        move: 'Prone Hip Extension: The After-Hours Finish',
        duration: '12 reps / 12 pulses each side',
        flow: 'Prone (face down), forehead on hands. Squeeze ONE glute and lift that leg 2-3 inches off the mat — that is the entire range. Pulse that 2-3 inches for 12 counts. Lower. Repeat on the other side. End with both legs together, squeeze and lift for a 20-count hold.',
        corrections: '2-3 inches is not a typo. The range is tiny because you\'re keeping the pelvis perfectly neutral on the mat. The moment the hip pops up means you\'ve gone too far. Place a hand under your hip — if you feel pressure increasing, lower the leg.',
        levelUp: 'Prop onto forearms (sphinx position) — changes the hip angle and increases the recruitment',
        reset: 'No lift — just isometrically squeeze one glute at a time, hold 10 counts each',
        badge: 'NIGHT CLOSER',
        intensity: 3,
      },
    ],
    dailyEdge: {
      move: 'Single-Leg Romanian Deadlift: The Secret Burner',
      secret: 'Most people hinge at the hip AND simultaneously lose their glute engagement. Instructor secret: before you even start the movement, PRE-CONTRACT the glute of the standing leg — squeeze it as if you\'re already at the bottom of the movement. Maintain that engagement through the ENTIRE hinge. The leg that floats behind you is just your counterbalance. All the work happens in the hip of the standing side. This single cue will make the movement 3x harder and 10x more effective.',
      duration: '8 reps each side / 3-count hinge, 2-count return',
    },
  },
}

const DAILY_EDGES = {
  miami: VIBES.miami.dailyEdge,
  artbasel: VIBES.artbasel.dailyEdge,
  eclipse: VIBES.eclipse.dailyEdge,
  southbeach: VIBES.southbeach.dailyEdge,
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function IntensityDots({ level }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all ${
            i <= level
              ? 'bg-[#ff2d78] shadow-[0_0_4px_#ff2d78]'
              : 'bg-[#2a2a2a]'
          }`}
        />
      ))}
    </div>
  )
}

function Badge({ text, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest border ${className}`}>
      {text}
    </span>
  )
}

function VibeCard({ vibe, isActive, onClick }) {
  const v = VIBES[vibe]
  return (
    <button
      onClick={onClick}
      className={`relative group w-full text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
        isActive
          ? 'border-[#ff2d78] bg-[#1a1a1a] shadow-[0_0_20px_#ff2d7830]'
          : 'border-[#2a2a2a] bg-[#111111] hover:border-[#3a3a3a] hover:bg-[#1a1a1a]'
      }`}
    >
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br ${v.gradient} ${isActive ? 'opacity-5' : 'group-hover:opacity-3'}`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xl">{v.emoji}</span>
          {isActive && (
            <div className="w-2 h-2 rounded-full bg-[#ff2d78] animate-pulse shadow-[0_0_6px_#ff2d78]" />
          )}
        </div>
        <div className="font-display font-bold text-sm text-[#f0f0f0] leading-tight">{v.name}</div>
        <div className="text-[#6b6b6b] text-xs font-mono mt-0.5">{v.subtitle}</div>
        <div className="mt-2">
          <Badge text={v.tag} className={v.badgeColor} />
        </div>
      </div>
    </button>
  )
}

function ExerciseRow({ exercise, vibe, index, isExpanded, onToggle }) {
  const v = VIBES[vibe]
  return (
    <div
      className={`border border-[#1e1e1e] rounded-xl overflow-hidden transition-all duration-300 ${
        isExpanded ? 'bg-[#111111]' : 'bg-[#0e0e0e] hover:bg-[#111111]'
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Row Header */}
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center gap-4 group"
      >
        {/* Index */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
          style={{ backgroundColor: `${v.accent}15`, color: v.accent, border: `1px solid ${v.accent}30` }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Move Name + badge */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-semibold text-[#f0f0f0] text-sm leading-snug">
              {exercise.move}
            </span>
            <Badge text={exercise.badge} className={v.badgeColor} />
          </div>
          <div className="text-[#6b6b6b] text-xs font-mono mt-0.5 truncate">{exercise.duration}</div>
        </div>

        {/* Intensity + Expand */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <IntensityDots level={exercise.intensity} />
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 ${
              isExpanded
                ? 'border-[#ff2d78] bg-[#ff2d7815]'
                : 'border-[#2a2a2a] bg-transparent group-hover:border-[#3a3a3a]'
            }`}
          >
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              style={{ color: isExpanded ? '#ff2d78' : '#6b6b6b' }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded Detail */}
      {isExpanded && (
        <div className="px-5 pb-5 animate-[fadeIn_0.25s_ease-out]">
          <div className="w-full h-px bg-[#1e1e1e] mb-4" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* The Flow */}
            <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#1a1a1a]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: v.accent }} />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#6b6b6b] uppercase">The Flow</span>
              </div>
              <p className="text-[#c0c0c0] text-xs leading-relaxed font-display">{exercise.flow}</p>
            </div>

            {/* Corrections */}
            <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#1a1a1a]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff2d78]" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#6b6b6b] uppercase">Corrections</span>
              </div>
              <p className="text-[#c0c0c0] text-xs leading-relaxed font-display">{exercise.corrections}</p>
            </div>

            {/* Level Up */}
            <div className="bg-[#0a0f0a] rounded-xl p-4 border border-[#1a2a1a]">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700 uppercase">Level Up</span>
              </div>
              <p className="text-[#c0c0c0] text-xs leading-relaxed font-display">{exercise.levelUp}</p>
            </div>

            {/* Reset */}
            <div className="bg-[#0a0a10] rounded-xl p-4 border border-[#1a1a2a]">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-700 uppercase">Reset</span>
              </div>
              <p className="text-[#c0c0c0] text-xs leading-relaxed font-display">{exercise.reset}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DailyEdge({ vibe }) {
  const v = VIBES[vibe]
  const edge = DAILY_EDGES[vibe]
  const [revealed, setRevealed] = useState(false)

  useEffect(() => { setRevealed(false) }, [vibe])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0e0e0e]">
      {/* BG glow */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ background: `radial-gradient(ellipse at top left, ${v.accent}, transparent 60%)` }}
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#ff2d78] animate-pulse shadow-[0_0_6px_#ff2d78]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#ff2d78] uppercase">The Daily Edge</span>
            </div>
            <h3 className="font-display font-bold text-xl text-[#f0f0f0] leading-tight mt-1">
              {edge.move}
            </h3>
            <div className="text-[#6b6b6b] text-xs font-mono mt-1">{edge.duration}</div>
          </div>
          <div className="text-2xl">{v.emoji}</div>
        </div>

        {/* Secret */}
        <div className="relative">
          {!revealed && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#2a2a2a]">
              <div className="text-3xl mb-3">🔐</div>
              <p className="text-[#6b6b6b] text-xs font-mono mb-4 text-center">Instructor&apos;s Secret locked</p>
              <button
                onClick={() => setRevealed(true)}
                className="px-5 py-2.5 rounded-lg font-mono text-xs font-bold tracking-wider text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: `linear-gradient(135deg, #ff2d78, ${v.accentSoft})`, boxShadow: `0 0 20px ${v.accent}40` }}
              >
                UNLOCK THE SECRET
              </button>
            </div>
          )}

          <div className={`rounded-xl p-5 border border-[#1e1e1e] bg-[#0a0a0a] transition-all duration-500 ${revealed ? 'blur-0' : 'blur-sm'}`}>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-[#ff2d78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#ff2d78] uppercase">Instructor&apos;s Secret</span>
            </div>
            <p className="text-[#c0c0c0] text-sm leading-relaxed font-display">{edge.secret}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="relative pt-12 pb-8 px-6 md:px-8 text-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #ff2d78, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#ff2d78]" />
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff2d78]">PILATES POWERHOUSE PRO</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#ff2d78]" />
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
          Sequence
          <span className="shimmer-text ml-3">Designer</span>
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d78] animate-pulse shadow-[0_0_6px_#ff2d78]" />
          <p className="text-[#6b6b6b] font-mono text-xs tracking-widest uppercase">Boutique Ninja Edition</p>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d78] animate-pulse shadow-[0_0_6px_#ff2d78]" />
        </div>
      </div>
    </header>
  )
}

function GenerateButton({ onClick, isGenerating, hasVibe }) {
  return (
    <button
      onClick={onClick}
      disabled={isGenerating}
      className={`w-full py-4 rounded-xl font-display font-bold text-base tracking-wider transition-all duration-300 relative overflow-hidden group ${
        isGenerating
          ? 'opacity-70 cursor-not-allowed'
          : 'hover:scale-[1.01] active:scale-[0.99]'
      }`}
      style={{
        background: 'linear-gradient(135deg, #ff2d78, #ff6ba8)',
        boxShadow: '0 0 30px #ff2d7840, 0 4px 15px #ff2d7830',
      }}
    >
      <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] opacity-0 group-hover:opacity-30 transition-opacity" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isGenerating ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Generating Sequence...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {hasVibe ? 'Regenerate Sequence' : 'Generate Sequence'}
          </>
        )}
      </span>
    </button>
  )
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeVibe, setActiveVibe] = useState(null)
  const [generatedVibe, setGeneratedVibe] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [expandedRows, setExpandedRows] = useState({})
  const sequenceRef = useRef(null)

  const handleGenerate = () => {
    if (!activeVibe) return
    setIsGenerating(true)
    setExpandedRows({})

    setTimeout(() => {
      setGeneratedVibe(activeVibe)
      setIsGenerating(false)
      setTimeout(() => {
        sequenceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }, 900)
  }

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const currentVibe = generatedVibe ? VIBES[generatedVibe] : null

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-display">
      {/* Subtle noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '128px' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20">
        {/* Header */}
        <Header />

        {/* Vibe Selector */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#6b6b6b] uppercase">01 / Select Your Vibe</span>
            <div className="flex-1 h-px bg-[#1e1e1e]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {Object.keys(VIBES).map(vibe => (
              <VibeCard
                key={vibe}
                vibe={vibe}
                isActive={activeVibe === vibe}
                onClick={() => setActiveVibe(vibe)}
              />
            ))}
          </div>

          {/* Active vibe description */}
          {activeVibe && (
            <div className="rounded-xl border border-[#1e1e1e] bg-[#0e0e0e] px-5 py-4 mb-5 animate-[fadeIn_0.3s_ease-out]">
              <div className="flex items-center gap-3">
                <span className="text-lg">{VIBES[activeVibe].emoji}</span>
                <div className="flex-1">
                  <div className="text-[#f0f0f0] font-display font-semibold text-sm">{VIBES[activeVibe].name} {VIBES[activeVibe].subtitle}</div>
                  <p className="text-[#6b6b6b] text-xs mt-0.5 leading-relaxed">{VIBES[activeVibe].description}</p>
                </div>
                <div className="flex-shrink-0 font-mono text-xs text-[#ff2d78] font-bold px-2 py-1 rounded-lg bg-[#ff2d7810] border border-[#ff2d7820]">
                  {VIBES[activeVibe].bpm}
                </div>
              </div>
            </div>
          )}

          <GenerateButton
            onClick={handleGenerate}
            isGenerating={isGenerating}
            hasVibe={!!generatedVibe}
          />
        </section>

        {/* Generated Sequence */}
        {generatedVibe && !isGenerating && (
          <div ref={sequenceRef} className="animate-[slideIn_0.4s_ease-out]">
            {/* Sequence Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#6b6b6b] uppercase">02 / Fusion Sequence</span>
              <div className="flex-1 h-px bg-[#1e1e1e]" />
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
                <span className="text-lg">{currentVibe.emoji}</span>
                <span className="font-mono text-xs text-[#f0f0f0] font-bold">{currentVibe.name}</span>
              </div>
            </div>

            {/* Table Legend */}
            <div className="flex items-center gap-6 mb-4 px-2 text-[10px] font-mono text-[#3a3a3a] uppercase tracking-widest">
              <span>Move</span>
              <span className="ml-auto">Intensity</span>
              <span>Detail</span>
            </div>

            {/* Exercise Rows */}
            <div className="space-y-2 mb-8">
              {currentVibe.sequence.map((exercise, index) => (
                <ExerciseRow
                  key={exercise.id}
                  exercise={exercise}
                  vibe={generatedVibe}
                  index={index}
                  isExpanded={!!expandedRows[exercise.id]}
                  onToggle={() => toggleRow(exercise.id)}
                />
              ))}
            </div>

            {/* The Daily Edge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#6b6b6b] uppercase">03 / The Daily Edge</span>
              <div className="flex-1 h-px bg-[#1e1e1e]" />
            </div>

            <DailyEdge vibe={generatedVibe} />
          </div>
        )}

        {/* Empty state */}
        {!generatedVibe && !isGenerating && (
          <div className="text-center py-20 text-[#2a2a2a]">
            <div className="text-5xl mb-4 opacity-30">⬆</div>
            <p className="font-mono text-xs tracking-widest uppercase">Select a vibe and generate your sequence</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="font-mono text-[10px] text-[#3a3a3a] tracking-[0.2em] uppercase">
            Pilates Powerhouse Pro · Boutique Ninja Edition · Built for the elite
          </p>
        </footer>
      </div>
    </div>
  )
}
